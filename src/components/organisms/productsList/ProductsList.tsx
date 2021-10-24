import React from "react";

import { useAppSelector } from "../../../store/hooks";
import { selectProducts } from "../../../store/selectors/productSelectors";

// import Pagination from "../../atoms/pagination/Pagination";
import Container from "../../atoms/container/Container";
import ProductCard from "../productCard/ProductCard";

import { sortByTime } from "../../../utils/sort";

const ProductsList = () => {
  const products = useAppSelector(selectProducts);
  const sortedProducts = sortByTime(products);

  return (
    <Container>
        {sortedProducts.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
    </Container>
  );
};

export default ProductsList;
