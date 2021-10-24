import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useFormik } from "formik";
import * as Yup from "yup";
import classnames from "classnames";

import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { productsActions } from "../../../store/slices/productsSlice";
import {
  selectActionType,
  selectSelectedProduct,
} from "../../../store/selectors/productSelectors";

import { InputType } from "../../atoms/input/Input";
import Row, { RowDirection } from "../../atoms/row/Row";
import Error from "../../atoms/typography/error/Error";
import Button, { ButtonType } from "../../atoms/button/Button";
import TextAreaField from "../../molecules/textAreaField/TextAreaField";
import InputField from "../../molecules/InputField/InputField";

import { Product } from "../../../models/Product";
import * as ProductService from "../../../api/GenericService";

import styles from "./style.module.scss";

const initialValues: Product = {
  id: uuidv4(),
  name: "",
  description: "",
  price: 0,
  creationDate: new Date().getTime(),
  imageName: "default.PNG",
};

const validationSchema = Yup.object().shape({
  name: Yup.string().required().max(30).label("Product Name"),
  description: Yup.string().max(200).label("Product Description"),
  price: Yup.number().required().moreThan(0).label("Price"),
});

type Props = {
  classes: string;
};

const ProductDetails = (props: Props) => {
  const { classes } = props;
  const classProps = classnames(styles.form, classes);

  const dispatch = useAppDispatch();

  const selectedProduct = useAppSelector(selectSelectedProduct) as Product;
  const actionType = useAppSelector(selectActionType);

  const [initialValuesFormik, setinitialValuesFormik] = useState(initialValues);

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: initialValuesFormik,
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      const newProduct = {
        ...values,
        creationDate: new Date().getTime(),
      };
      let products = [];

      if (actionType === "ADD")
        products = ProductService.add("products", newProduct);
      else
        products = ProductService.update("products", newProduct, newProduct.id);

      const selectedProduct = products.find(
        (p: Product) => p.id === newProduct.id
      );

      dispatch(productsActions.setProducts(products));
      dispatch(productsActions.setSelectedProduct(selectedProduct.id));
      dispatch(productsActions.setActionType("UPDATE"));
    },
  });

  useEffect(() => {
    setinitialValuesFormik({
      id: selectedProduct ? selectedProduct.id : uuidv4(),
      name: selectedProduct ? selectedProduct.name : "",
      description: selectedProduct ? selectedProduct.description : "",
      price: selectedProduct ? selectedProduct.price : 0,
      creationDate: selectedProduct
        ? selectedProduct.creationDate
        : new Date().getTime(),
      imageName: selectedProduct ? selectedProduct.imageName : "default.PNG",
    });
  }, [selectedProduct]);

  return (
    <form onSubmit={formik.handleSubmit} className={classProps}>
      <Row direction={RowDirection.COLUMN}>
        <InputField
          label="Name"
          name="name"
          value={formik.values.name}
          handleChange={(e) => {
            formik.handleChange(e);
          }}
        />
        <Error>{formik.errors.name}</Error>
      </Row>
      <Row direction={RowDirection.COLUMN}>
        <TextAreaField
          name="description"
          label="Descripion"
          value={formik.values.description}
          handleChange={(e) => {
            formik.handleChange(e);
          }}
        />
        <Error>{formik.errors.description}</Error>
      </Row>
      <Row>
        <InputField
          label="Price"
          name="price"
          value={formik.values.price.toString()}
          inputType={InputType.NUMBER}
          handleChange={(e) => {
            formik.handleChange(e);
          }}
        />
        <Error>{formik.errors.price}</Error>
      </Row>
      <Button
        type={ButtonType.SUBMIT}
        disabled={!(formik.isValid && formik.dirty)}
      >
        {actionType === "ADD" ? "Add Product" : "Update Product"}
      </Button>
    </form>
  );
};

ProductDetails.defaultProps = {
  classes: "",
};

export default ProductDetails;
