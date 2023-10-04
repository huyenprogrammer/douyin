import Tippy from "@tippyjs/react/headless";
import classNames from "classnames/bind";

import { PopperWrapper } from "@/components/Popper";
import styles from "./Menu.module.scss";
import MenuItem from "./MenuItem";
import { IItemMenu } from "./types";

const cx = classNames.bind(styles);

interface IProps {
  children: React.ReactElement;
  items?: IItemMenu[];
}

const MenuPopper = ({ children, items = [] }: IProps) => {
  const renderItems = () => {
    return items.map((item, index) => <MenuItem key={index} data={item} />);
  };

  return (
    <Tippy
      interactive
      delay={[0, 700]}
      placement='bottom-end'
      render={(attrs) => (
        <div className={cx("menu-items")} tabIndex={-1} {...attrs}>
          <PopperWrapper>{renderItems()}</PopperWrapper>
        </div>
      )}
    >
      {children}
    </Tippy>
  );
};

export default MenuPopper;
