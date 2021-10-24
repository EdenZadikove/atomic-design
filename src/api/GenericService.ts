import { arrayToString } from "../utils/array";
import {
  setSessionItem,
  getSessionItem,
  removeSessionItem,
} from "../utils/sessionStorage";

export const getById = (itemName: string, id: string) => {
  const objectsArray = getSessionItem(itemName);
  return objectsArray.find((o: any) => o.id === id);
};

export const getAll = (itemName: string) => {
  return getSessionItem(itemName);
};

export const create = <T>(itemName: string, data: T[]) => {
  setSessionItem(itemName, arrayToString(data));
};

export const add = <T>(itemName: string, data: T) => {
  const objectsArray = getSessionItem(itemName);

  objectsArray.push(data);
  setSessionItem(itemName, arrayToString(objectsArray));

  return objectsArray;
};

export const update = <T>(itemName: string, data: T, id: string) => {
  const objectsArray = getSessionItem(itemName);
  const filteredArray = objectsArray.filter((o: any) => o.id !== id);

  filteredArray.push(data);
  setSessionItem(itemName, arrayToString(filteredArray));

  return filteredArray;
};

export const filterBy = (itemName: string, filterValue: string) => {
  const objectsArray = getSessionItem(itemName);

  return objectsArray.filter((o: any) => {
    const name = o.name.toLowerCase();
    const description = o.description.toLowerCase();
    const value = filterValue.toLowerCase();

    return name.includes(value) || description.includes(value);
  });
};

export const deleteById = (itemName: string, id: string) => {
  const objectsArray = getSessionItem(itemName);
  const newObjectsArray = objectsArray.filter((o: any) => o.id !== id);

  setSessionItem(itemName, arrayToString(newObjectsArray));
  return newObjectsArray;
};

export const deleteAll = (itemName: string) => {
  removeSessionItem(itemName);
};

export const getByPage = (
  itemName: string,
  from: number,
  itemsPerPage: number,
) => {
  const objectsArray = getSessionItem(itemName);
  return objectsArray.slice(itemsPerPage * (from - 1), itemsPerPage * from);
};
