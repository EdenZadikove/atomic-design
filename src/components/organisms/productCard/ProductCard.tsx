import { Product } from "../../../models/Product";

import { useAppDispatch } from "../../../store/hooks";
import { productsActions } from "../../../store/slices/productsSlice";

import Card from "../../atoms/card/Card";
import Row from "../../atoms/row/Row";
import Image from "../../atoms/image/Image";
import Info from "../../atoms/typography/info/Info";
import Title from "../../atoms/typography/title/Title";
import Paragraph from "../../atoms/typography/paragraph/Paragraph";
import Button, { ButtonTheme } from "../../atoms/button/Button";

import * as ProductsService from "../../../api/GenericService";

import styles from "./style.module.scss";

type Props = {
  product: Product;
};

const ProductCard = (props: Props) => {
  const { product } = props;
  const dispatch = useAppDispatch();

  const handleShowDetails = (id: string) => {
    dispatch(productsActions.setActionType("UPDATE"));
    dispatch(productsActions.setSelectedProduct(id));
    
  };

  const handleDelete = (id: string) => {
    const newProducts = ProductsService.deleteById("products", id);
    
    dispatch(productsActions.setProducts(newProducts));
    dispatch(productsActions.setSelectedProduct(null));
    dispatch(productsActions.setActionType("ADD"));

  };

  return (
    <Card>
      <div className={styles.body}>
        <Image imageName={product.imageName} />
        <div className={styles.productDesc}>
          <Row>
            <Title>{product.name}</Title>
            <Info>
              Last Updated:{" "}
              {(new Date(product.creationDate)).toLocaleString()}
            </Info>
          </Row>
          <Paragraph>{product.description}</Paragraph>
        </div>
      </div>
      <div className={styles.footer}>
        <Button
          theme={ButtonTheme.CANCEL}
          onClick={() => handleDelete(product.id)}
        >
          Delete
        </Button>
        <Button onClick={() => handleShowDetails(product.id)}>
          Show Details
        </Button>
      </div>
    </Card>
  );
};

ProductCard.defaultProps = {};

export default ProductCard;