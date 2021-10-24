import classnames from "classnames";

import styles from "./style.module.scss";

export type DropdownOption = {
  value: string;
  selected: boolean;
  text: string;
};

type Props = {
  classes: string;
  options: DropdownOption[];
  handleChnage: React.ChangeEventHandler<HTMLSelectElement>
};

const Dropdown = (props: Props) => {
  const { classes, options, handleChnage } = props;

  const classProps = classnames(styles.dropdown, classes);

  return (
    <select name="cars" id="cars" className={classProps} onChange={handleChnage}>
      {options.map((op: DropdownOption, index) => (
        <option key={index} value={op.value}>
          {op.text}
        </option>
      ))}
    </select>
  );
};

Dropdown.defaultProps = {
  classes: "",
  options: [],
  handleChnage: () => null
};

export default Dropdown;
