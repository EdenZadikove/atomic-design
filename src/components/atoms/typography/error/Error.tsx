import React from "react";
import classnames from "classnames";

import styles from "./style.module.scss";

type Props = {
  classes: string;
  children: React.ReactNode;
};

const Error = (props: Props) => {
  const { classes, children } = props;

  return <span className={classnames(styles.error, classes)}>{children}</span>;
};

Error.defaultProps = {
  classes: "",
  children: "",
};

export default Error;