import * as React from "react";
import classnames from "classnames";

import styles from "./style.module.scss";

export enum ButtonType {
  BUTTON = "button",
  RESET = "reset",
  SUBMIT = "submit",
}

export enum ButtonTheme {
  DEFAULT = "default",
  ROUNDED = "rounded",
  CANCEL = "cancel",
}

export enum ButtonSize {
  SMALL = "small",
  MEDIUM = "medium",
  LARGE = "large",
}

type Props = {
  type: ButtonType;
  theme: ButtonTheme;
  size: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  children: React.ReactNode;
  classes: string;
  disabled: boolean;
};

const Button = (props: Props) => {
  const { type, onClick, children, theme, size, classes, disabled } = props;
  const classProps: string = classnames(
    styles.button,
    styles[type],
    styles[theme],
    styles[size],
    {
      [styles.disabled]: disabled,
    },
    classes
  );

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classProps}
    >
      {children}
    </button>
  );
};

Button.defaultProps = {
  type: ButtonType.BUTTON,
  theme: ButtonTheme.DEFAULT,
  size: ButtonSize.MEDIUM,
  onClick: () => {},
  classes: "",
  disabled: false,
};

export default Button;
