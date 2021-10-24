import React from "react";
import classnames from "classnames";

import styles from "./style.module.scss";

export enum InputType {
  "TEXT" = "text",
  "NUMBER" = "number",
}

type Props = {
  classes: string;
  name: string;
  type: InputType;
  placeHolder: string;
  disabled: boolean;
  handleChange: React.ChangeEventHandler<HTMLInputElement>;
  value: string;
};

const Input = (props: Props) => {
  const { classes, name, type, placeHolder, disabled, handleChange, value } =
    props;

  const classProps = classnames(styles.input, classes);

  return (
    <input
      name={name}
      type={type}
      placeholder={placeHolder}
      className={classProps}
      disabled={disabled}
      value={value}
      onChange={handleChange}
    />
  );
};

Input.defaultProps = {
  classes: "",
  name: "",
  type: InputType.TEXT,
  placeHolder: "",
  disabled: false,
  handleChange: () => null,
  value: "",
};

export default Input;
