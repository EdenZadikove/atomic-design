import React from "react";
import classnames from "classnames";

import Label from "../../atoms/typography/label";
import TextArea from "../../atoms/textArea/TextArea";

import styles from "./style.module.scss";

type Props = {
  classes: string;
  label: string;
  name: string;
  value: string;
  handleChange: React.ChangeEventHandler<HTMLTextAreaElement>;
};

const TextAreaField = (props: Props) => {
  const { classes, label, name, value, handleChange } = props;
  const classProps = classnames(styles.textAreaField, classes);

  return (
    <div className={classProps}>
      <Label>{label}</Label>
      <TextArea name={name} value={value} handleChange={handleChange} />
    </div>
  );
};

TextAreaField.defaultProps = {
  classes: "",
  label: "",
  name: "",
  value: "",
};

export default TextAreaField;
