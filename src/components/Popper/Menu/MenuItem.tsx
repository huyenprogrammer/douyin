import classNames from "classnames/bind";

import Button from "@/components/Button";
import styles from "./Menu.module.scss";
import { IMenuItem } from "./types";

const cx = classNames.bind(styles);

interface IProps {
  data: IMenuItem;
  onClick: () => void;
}

const MenuItem = ({ data, onClick }: IProps) => {
  return (
    <Button
      className={cx("menu-item")}
      leftIcon={data.icon}
      to={data.to}
      onClick={onClick}
    >
      {data.title}
    </Button>
  );
};

export default MenuItem;
