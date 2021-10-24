import React from "react";
import classnames from "classnames";

import styles from "./style.module.scss";

const getMappedVariant = (variant: string) => {
  switch (variant) {
    case "header":
      return "h4";
    case "title":
      return "subtitle1";
    case "subtitle":
      return "subtitle2";
    case "label":
      return styles.label;
    default:
      return "body1";
  }
};

type Props = {
  classes: string;
  children: React.ReactNode;
  variant: string;
};

const Text = (props: Props) => {
  const { classes, children, variant } = props;
  const classProps = classnames(styles.text, classes);

  return (
    <div className={classProps}>
      {children}
    </div>
  );
};

Text.defaultProps = {
  classes: "",
  children: "",
  variant:""
};

export default Text;
