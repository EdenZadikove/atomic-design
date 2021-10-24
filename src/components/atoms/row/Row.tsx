import React from "react";
import classnames from "classnames";

import styles from "./style.module.scss";

export enum RowDirection {
  "COLUMN" = "Column",
  "ROW" = "Row",
}

type Props = {
  classes: string;
  children: React.ReactNode;
  direction: RowDirection;
};

const Row = (props: Props) => {
  const { classes, children, direction } = props;
  const classProps = classnames(
    styles.row,
    direction === RowDirection.COLUMN && "rowColumn",
    classes
  )

  return <div className={classProps}>{children}</div>;
};

Row.defaultProps = {
  classes: "",
  children: "",
  direction: RowDirection.ROW
};

export default Row;
