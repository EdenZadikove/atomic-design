import React from "react";
import classnames from "classnames";

import styles from "./style.module.scss";

export enum ContainerType {
  FLEX = "flex",
  GRID = "grid",
}

export enum DirectionType {
  ROW = "Row",
  COLUMN = "Column",
}

export enum Float {
  RIGHT = "Right",
  LEFT = "Left",
}

type Props = {
  children: React.ReactNode;
  classes: string;
  containerType: ContainerType;
  direction: DirectionType;
  float: Float;
};

const Container = (props: Props) => {
  const { children, classes, containerType, direction, float } = props;
  
  const classProps = classnames(
    styles[containerType],
    styles[`${containerType}${direction}`],
    styles[`${containerType}${float}`],
    classes
  );

  return <div className={classProps}>{children}</div>;
};

Container.defaultProps = {
  children: "",
  classes: "",
  containerType: ContainerType.GRID,
  direction: DirectionType.COLUMN,
  float: Float.LEFT,
};

export default Container;
