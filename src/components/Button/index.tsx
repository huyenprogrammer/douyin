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
  outline?: boolean;
  size?: string;
  text?: boolean;
  disabled?: boolean;
  onClick?: () => void;
  rounded?: boolean;
  className?: string;
  leftIcon?: React.ReactElement;
  rightIcon?: React.ReactElement;
}

const Button: React.FC<IProps> = ({
  primary,
  children,
  outline,
  size = "medium",
  text,
  rounded,
  className = "",
  leftIcon,
  rightIcon,
  ...props
}) => {
  let Component:
    | string
    | ForwardRefExoticComponent<LinkProps & RefAttributes<HTMLAnchorElement>> =
    "button";
  const { href, to, disabled } = props;

  if (to) {
    Component = Link;
  }

  if (href) {
    Component = "a";
  }

  const classes = cx("wrapper", size, {
    primary,
    outline,
    text,
    disabled,
    rounded,
    [className]: className,
  });

  return (
    <Component className={classes} to={to ?? ""} {...props}>
      {leftIcon && <span className={cx("icon")}>{leftIcon}</span>}
      <span>{children}</span>
      {rightIcon && <span className={cx("icon")}>{rightIcon}</span>}
    </Component>
  );
};

export default Button;
