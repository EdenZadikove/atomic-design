import React from "react";
import classnames from "classnames";

import styles from "./style.module.scss";

type Props = {
  classes: string;
  children: React.ReactNode;
};

const SubTitle = (props: Props) => {
  const { classes, children } = props;

  return (
    <span className={classnames(styles.subtitle, classes)}>{children}</span>
  );
};

SubTitle.defaultProps = {
  classes: "",
  children: "",
};

export default SubTitle;
