import classNames from "classnames/bind";
import { ReactNode } from "react";

import styles from "./Popper.module.scss";

const cx = classNames.bind(styles);

const Wrapper: React.FC<{ children: ReactNode }> = ({ children }) => {
  return <div className={cx("wrapper")}>{children}</div>;
};

export default Wrapper;
