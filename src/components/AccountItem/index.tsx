import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";

import styles from "./AccountItem.module.scss";

const cx = classNames.bind(styles);

const AccountItem = () => {
  return (
    <div className={cx("wrapper")}>
      <img
        src='https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-avt-0068-giso/fa9c61d17795d143f6fa7e780755d33b~c5_100x100.jpeg?x-expires=1695524400&x-signature=eN15gmAOnpyFWkO%2FlFsdfdVjDbQ%3D'
        className={cx("avatar")}
        alt=''
      />

      <div className={cx("info")}>
        <p className={cx("name")}>
          <span>Nguyen</span>

          <FontAwesomeIcon className={cx("check")} icon={faCheckCircle} />
        </p>

        <span className={cx("username")}> nguyena</span>
      </div>
    </div>
  );
};

export default AccountItem;
