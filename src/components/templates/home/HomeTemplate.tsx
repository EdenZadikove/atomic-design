import classnames from "classnames";

import Container, {
  ContainerType,
  DirectionType,
} from "../../atoms/container/Container";
import Header from "../../organisms/header/Header";
import StoreActions from "../../organisms/storeActions/StoreActions";
import ProductsList from "../../organisms/productsList/ProductsList";
import ProductDetails from "../../organisms/productDetails/ProductDetails";
import Title from "../../atoms/typography/title/Title";

type Props = {
  classes: string;
  headerClasses: string;
  productsListClasses: string;
  productDetailsClasses: string
  header: string;
};

const HomeTemplate = (props: Props) => {
  const { classes, headerClasses, productsListClasses, productDetailsClasses, header } = props;
  const classProps = classnames(classes);

  return (
    <>
      <Header>
        <Title classes={headerClasses}>{header}</Title>
      </Header>
      <Container
        containerType={ContainerType.FLEX}
        direction={DirectionType.ROW}
      >
        <Container
          classes={classnames(productsListClasses, classes)}
          containerType={ContainerType.FLEX}
          direction={DirectionType.COLUMN}
        >
          <StoreActions />
          <ProductsList />
        </Container>
        <Container
          classes={classnames(productDetailsClasses, classProps)}
          containerType={ContainerType.FLEX}
          direction={DirectionType.COLUMN}
        >
          <ProductDetails />
        </Container>
      </Container>
    </>
  );
};

HomeTemplate.defaultProps = {
  classes: "",
  headerClasses: "",
  productsListClasses: "",
  productDetailsClasses: ""
};

export default HomeTemplate;
