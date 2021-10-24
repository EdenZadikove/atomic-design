import React from "react";
import classnames from "classnames";

import styles from "./style.module.scss";

type Props = {
  classes: string;
  children: React.ReactNode;
};

const Title = (props: Props) => {
  const { classes, children } = props;

  return <div className={classnames(styles.title, classes)}>{children}</div>;
};

Title.defaultProps = {
  classes: "",
  children: "",
};

export default Title;