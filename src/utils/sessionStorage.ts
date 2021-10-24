import { stringToArray } from "./array";

export const getSessionItem= (itemName: string) => {
  const itemValue = sessionStorage.getItem(itemName);
  let objectsArray = [];
  
  if (itemValue) objectsArray = stringToArray(itemValue);

  return objectsArray;
};

export const setSessionItem = (itemName: string, itemValue: string) => {
  sessionStorage.setItem(itemName, itemValue);
};

export const removeSessionItem = (itemName: string) => {
  sessionStorage.removeItem(itemName);
}