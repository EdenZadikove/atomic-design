import React from "react";
import classnames from "classnames";

import styles from "./style.module.scss";

type Props = {
  classes: string;
  children: React.ReactNode;
};

const Info = (props: Props) => {
  const { classes, children } = props;

  return <span className={classnames(styles.info, classes)}>{children}</span>;
};

Info.defaultProps = {
  classes: "",
  children: "",
};

export default Info;
