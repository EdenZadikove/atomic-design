import React from "react";
import classnames from "classnames";

import Input, { InputType } from "../../atoms/input/Input";
import Label from "../../atoms/typography/label";

import styles from "./style.module.scss";

type Props = {
  classes: string;
  label: string;
  name: string;
  value: string;
  inputType: InputType;
  handleChange: React.ChangeEventHandler<HTMLInputElement>;
};

const InputField = (props: Props) => {
  const { classes, label, name, value, handleChange, inputType } = props;
  const classProps = classnames(styles.inputField, classes);

  return (
    <div className={classProps}>
      <Label>{label}</Label>
      <Input
        name={name}
        value={value}
        handleChange={handleChange}
        type={inputType}
      />
    </div>
  );
};

InputField.defaultProps = {
  classes: "",
  label: "",
  name: "",
  value: "",
  inputType: InputType.TEXT,
};

export default InputField;
