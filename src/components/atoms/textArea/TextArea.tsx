import React from "react";
import classnames from "classnames";

import styles from "./style.module.scss";

type Props = {
  className: string;
  name: string,
  value: string,
  handleChange: React.ChangeEventHandler<HTMLTextAreaElement>;
};

const TextArea = (props: Props) => {
  const { className, name, value, handleChange } = props;

  return <textarea 
  name={name}
  cols={23}
  rows={4}
  onChange={handleChange}
  className={classnames(styles.textArea, className)} value={value}/>;
};

TextArea.defaultProps = {
  className: "",
};

export default TextArea;