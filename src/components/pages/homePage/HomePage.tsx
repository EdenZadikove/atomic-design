import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch } from "../../../store/hooks";
import { productsActions } from "../../../store/slices/productsSlice";
import HomeTemplate from "../../templates/home/HomeTemplate";
import styles from "./style.module.scss";

type Params = {
  id: string
}
const HomePage = () => {
  const { id } = useParams<Params>();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(productsActions.setSelectedProduct(id));
  }, [dispatch, id]);

  return (
    <HomeTemplate
      classes={styles.body}
      headerClasses={styles.header}
      productsListClasses={styles.productList}
      productDetailsClasses={styles.productDetails}
      header="Toys Store"
    />
  );
};

export default HomePage;
