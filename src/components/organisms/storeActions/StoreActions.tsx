import { useState, useEffect } from "react";
import { useDebounce } from "../../../customHooks/useDebounce";

import { useAppDispatch } from "../../../store/hooks";
import { productsActions } from "../../../store/slices/productsSlice";
import * as ProductService from "../../../api/GenericService";

import Button from "../../atoms/button/Button";
import Input from "../../atoms/input/Input";
import Dropdown from "../../atoms/dropdown/Dropdown";
import Container, {
  ContainerType,
  DirectionType,
} from "../../atoms/container/Container";
import * as productService from "../../../api/GenericService";

import * as sortUtils from "../../../utils/sort";

const sortOptions = [
  {
    value: "productName",
    text: "Product Name",
    selected: true,
  },
  {
    value: "creationDate",
    text: "Creation Date",
    selected: false,
  },
];

const StoreActions = () => {

  const dispatch = useAppDispatch();

  const [searchValue, setSearchValue] = useState("");
  const [sortOption, setSortOption] = useState("productName");

  const debouncedSearchTerm = useDebounce(searchValue, 300);

  useEffect(() => {
    const products = productService.getAll("products");
    
    switch (sortOption) {
      case "productName":
        dispatch(productsActions.setProducts(sortUtils.sortByName(products)));
        break;
      case "creationDate":
        dispatch(productsActions.setProducts(sortUtils.sortByTime(products)));
        break;
      default:
    }
  }, [sortOption]);

  useEffect(() => {
    if (debouncedSearchTerm) {
      const filteredProducts = ProductService.filterBy("products", searchValue);
      dispatch(productsActions.setProducts(filteredProducts));
    }
  }, [debouncedSearchTerm]);


  const handleAdd = () => {
    dispatch(productsActions.setActionType("ADD"));
    dispatch(productsActions.setSelectedProduct(null));
  };

  const handleSearch = (currentTarget: EventTarget & HTMLInputElement) => {
    setSearchValue(currentTarget.value);
  };

  const handleSort = (value: string) => {
    setSortOption(value);
  };

  return (
    <Container containerType={ContainerType.FLEX} direction={DirectionType.ROW}>
      <Button onClick={handleAdd}>Add</Button>
      <Input
        placeHolder="Search..."
        handleChange={(e) => handleSearch(e.currentTarget)}
        value={searchValue}
      />
      <Dropdown
        options={sortOptions}
        handleChnage={(e) => handleSort(e.currentTarget.value)}
      />
    </Container>
  );
};

export default StoreActions;
