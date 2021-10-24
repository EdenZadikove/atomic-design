import React from "react";
import classnames from "classnames";

import styles from "./style.module.scss";

type Props = {
  children: React.ReactNode;
  classes: string;
};

const Paragraph = (props: Props) => {
  const { classes, children } = props;

  const classProps = classnames(styles.paragraph, classes);

  return <div className={classProps}>{children}</div>;
};

Paragraph.defaultProps = {
  children: "",
  classes: ""
};

export default Paragraph;
