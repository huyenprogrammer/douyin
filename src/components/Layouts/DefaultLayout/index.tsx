import classNames from "classnames/bind";
import { ReactNode } from "react";

import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import styles from "./DefaultLayout.module.scss";

const cx = classNames.bind(styles);

interface IProps {
  children: ReactNode;
}

const DefaultLayout = ({ children }: IProps) => {
  return (
    <div className={cx("wrapper")}>
      <Header />

      <div className={cx("container")}>
        <Sidebar />

        <div className={cx("content")}>{children}</div>
      </div>
    </div>
  );
};

export default DefaultLayout;
