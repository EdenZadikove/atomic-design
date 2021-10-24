import React from "react";
import classnames from "classnames";

import styles from "./style.module.scss";

type Props = {
  classes: string;
  imageName: string;
};

const Image = (props: Props) => {
  const { classes, imageName } = props;

  const classProps = classnames(styles.container, classes);

  return (
    <div className={classProps}>
      <img className="image" src={`/images/${imageName}`} alt="product"></img>
    </div>
  );
};

Image.defaultProps = {
    classes:"",
    imageName: ""

};

export default Image;
