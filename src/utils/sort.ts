import { Product } from "../models/Product";

export const sortByTime = (array: Product[]) => {
  const sorted = [...array];
  
  
  return sorted.sort(
    (a: Product, b: Product) => b.creationDate - a.creationDate
  );
};

export const sortByName = (array: Product[]) => {
  const sorted = [...array];
  console.log(array);
  return sorted.sort((a: Product, b: Product) => {
    if (a.name < b.name) {
      return -1;
    }
    if (a.name > b.name) {
      return 1;
    }
    return 0;
  });
};
