import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { productsActions } from "../../../store/slices/productsSlice";
import * as paginationSelectors from "../../../store/selectors/paginationSelectors";

import Container, {
  ContainerType,
  DirectionType,
  Float,
} from "../container/Container";
import Button from "../button/Button";

import * as productService from "../../../api/GenericService";
import { paginationActions } from "../../../store/slices/paginationSlice";

type Props = {
  children: React.ReactNode;
  firstPage: number;
  itemsPerPage: number;
  numOfTotalItems: number;
};

const Pagination = (props: Props) => {
  const { children, firstPage, numOfTotalItems, itemsPerPage } = props;
  const dispatch = useAppDispatch();
  const currentPage = useAppSelector(paginationSelectors.selectCurrentPage);
  const lastPage = Math.ceil(numOfTotalItems / itemsPerPage);

  useEffect(() => {
    const products = productService.getByPage(
      "products",
      currentPage,
      itemsPerPage,

    );
    dispatch(productsActions.setProducts(products));
  }, [dispatch, currentPage, itemsPerPage]);

  const handlePagination = (page: number) => {
    dispatch(paginationActions.setCurrentPage(page));
  };


/**
 * TODO: finish this component on my free time.
 */


  return (
    <Container>
      {children}
      <Container
        containerType={ContainerType.FLEX}
        direction={DirectionType.ROW}
        float={Float.RIGHT}
      >
        <Button
          onClick={() => handlePagination(firstPage)}
          disabled={currentPage === firstPage}
        >
          First Page
        </Button>
        <Button
          onClick={() => handlePagination(currentPage - 1)}
          disabled={currentPage === firstPage}
        >
          Previous
        </Button>
        <Button
          onClick={() => handlePagination(currentPage + 1)}
          disabled={(currentPage * itemsPerPage) % numOfTotalItems < 1}
        >
          Next
        </Button>
        <Button
          onClick={() => handlePagination(lastPage)}
          disabled={currentPage === lastPage}
        >
          Last Page
        </Button>
      </Container>
    </Container>
  );
};

Pagination.defaultProps = {
  children: "",
  firstPage: "",
  lastPage: "",
};

export default Pagination;
