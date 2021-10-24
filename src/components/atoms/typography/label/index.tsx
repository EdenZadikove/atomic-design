import React from "react";
import classnames from "classnames";

import styles from "./style.module.scss";

type Props = {
  classes: string;
  children: React.ReactNode;
};

const Label = (props: Props) => {
  const { classes, children} = props;

  return (
    <div
      className={classnames(styles.label, classes)}
    >
        {children}
    </div>
  );
};

Label.defaultProps = {
  classes: "",
  children: ""
};

export default Label;
