import React from "react"
import classnames from "classnames";

import Container from "../../atoms/container/Container";

import styles from "./style.module.scss";

type Props = {
    children: React.ReactNode,
    classes: string
}

const Header = (props: Props) => {
    const {classes, children} = props;

    const classProps = classnames(
        classes
    )
    
    return (
        <Container classes={styles.header}>
            {children}
        </Container>
    )
}

Header.defaultProps = {
    children: "",
    classes: ""
}

export default Header;