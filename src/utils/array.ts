export const arrayToString = <T>(array: T[]) => {
  const stringsArray = array.map((item) => JSON.stringify(item));
  return JSON.stringify(stringsArray);
};

export const stringToArray = (value: string) => {
  const stringArray = JSON.parse(value);
  return stringArray.map((item: string) => JSON.parse(item));
};
