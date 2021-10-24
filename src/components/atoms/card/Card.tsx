import * as React from "react";
import classnames from "classnames";

import styles from "./style.module.scss";

type Props = {
  children?: React.ReactNode;
  classes?: string;
};

const Card = (props: Props) => {
  const { classes, children } = props;
  const classProps = classnames(
      styles.card,
      classes
  )

  return (
    <div className={classProps}>
      {children}
    </div>
  );
};

Card.defaultProps = {
  className: "",
  children: "",
};

export default Card;
