import classNames from "classnames/bind";

import Button from "@/components/Button";
import styles from "./Menu.module.scss";
import { IItemMenu } from "./types";

const cx = classNames.bind(styles);

interface IProps {
  data: IItemMenu;
}

const MenuItem = ({ data }: IProps) => {
  return (
    <Button className={cx("menu-item")} leftIcon={data.icon} to={data.to}>
      {data.title}
    </Button>
  );
};

export default MenuItem;
