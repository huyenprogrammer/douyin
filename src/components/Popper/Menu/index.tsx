import Tippy from "@tippyjs/react/headless";
import classNames from "classnames/bind";
import { useState } from "react";

import { PopperWrapper } from "@/components/Popper";
import Header from "./Header";
import styles from "./Menu.module.scss";
import MenuItem from "./MenuItem";
import { IMenuItem } from "./types";

const cx = classNames.bind(styles);

interface IProps {
  children: React.ReactElement;
  items?: IMenuItem[];
  onChange: (menuItem: IMenuItem) => void;
}

const MenuPopper = ({ children, items = [], onChange }: IProps) => {
  const [history, setHistory] = useState<IMenuItem[]>([{ data: items }]);

  const current = history[history.length - 1];

  const renderItems = () => {
    if (!current.data) return;

    return current.data.map((item, index) => {
      const isParent = !!item.children;

      return (
        <MenuItem
          key={index}
          data={item}
          onClick={() => {
            if (isParent) {
              setHistory((prevHistory) => [
                ...prevHistory,
                { ...item.children },
              ]);
            } else {
              onChange(item);
            }
          }}
        />
      );
    });
  };

  const handleBack = () => {
    setHistory((prevState) => prevState.slice(0, prevState.length - 1));
  };

  return (
    <Tippy
      visible
      interactive
      delay={[0, 700]}
      placement='bottom-end'
      render={(attrs) => (
        <div className={cx("menu-items")} tabIndex={-1} {...attrs}>
          <PopperWrapper>
            {current.title && (
              <Header title={current.title} onBack={handleBack} />
            )}

            {renderItems()}
          </PopperWrapper>
        </div>
      )}
    >
      {children}
    </Tippy>
  );
};

export default MenuPopper;
