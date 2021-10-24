import React from "react";
import classnames from "classnames";

import styles from "./style.module.scss";

export enum messageType {
  "ERROR"= "error",
  "SUCCESS"= "success",
  "WARNING"= "warning",
  "INFO"= "info"
}

type Props = {
  children: React.ReactNode;
  type: messageType;
  classes: string
};

const MessageLabel = (props: Props) => {
  const { children, type, classes } = props;
  const classProps = classnames(
    styles[type],
    styles.message,
    classes
  )

  return <span className={classProps}>{children}</span>;
};

MessageLabel.defaultProps = {
    children: "",
    type: messageType.INFO,
    classes: ""
}

export default MessageLabel;
