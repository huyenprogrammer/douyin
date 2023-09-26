import {
  faCircleXmark,
  faMagnifyingGlass,
  faSpinner,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Tippy from "@tippyjs/react/headless";
import classNames from "classnames/bind";
import { useEffect, useState } from "react";

import images from "@/assets/images";
import styles from "./Header.module.scss";

const cx = classNames.bind(styles);

const Header = () => {
  const [searchResult, setSearchResult] = useState<string[]>([]);

  useEffect(() => {
    setSearchResult(["hehe"]);
  }, []);

  return (
    <header className={cx("wrapper")}>
      <div className={cx("inner")}>
        <img src={images.logo} className={cx("logo")} alt='logo' />

        <Tippy
          interactive
          visible={searchResult.length > 0}
          render={(attrs) => (
            <div className={cx("search-result")} tabIndex={-1} {...attrs}>
              Result
            </div>
          )}
        >
          <div className={cx("search")}>
            <input type='text' placeholder='Tìm kiếm' />

            <button className={cx("clear")}>
              <FontAwesomeIcon icon={faCircleXmark} />
            </button>

            <FontAwesomeIcon className={cx("loading")} icon={faSpinner} />

            <button className={cx("search-btn")}>
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
          </div>
        </Tippy>

        <div className={cx("actions")}>
          <button>Log in</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
