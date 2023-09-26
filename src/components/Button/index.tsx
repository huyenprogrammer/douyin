import classNames from "classnames/bind";
import { ForwardRefExoticComponent, ReactNode, RefAttributes } from "react";
import { Link, LinkProps } from "react-router-dom";

import styles from "./Button.module.scss";

const cx = classNames.bind(styles);

interface IProps {
  primary?: boolean;
  children: ReactNode;
  href?: string;
  to?: string;
}

const Button: React.FC<IProps> = ({ primary, children, ...props }) => {
  let Component:
    | string
    | ForwardRefExoticComponent<LinkProps & RefAttributes<HTMLAnchorElement>> =
    "button";
  const { href, to } = props;

  if (to) {
    Component = Link;
  }

  if (href) {
    Component = "a";
  }

  const classes = cx("wrapper", {
    primary,
  });

  return (
    <Component className={classes} to={to ?? ""} {...props}>
      <span>{children}</span>
    </Component>
  );
};

export default Button;
