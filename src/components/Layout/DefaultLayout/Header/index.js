import classNames from "classnames/bind";
import styles from "./Header.module.scss";

const cx = classNames.bind(styles);
function Header() {
  return (
    <div className={cx("wrapper-header")}>
      <img src="https://geekup.vn/Icons/geekup-logo-general.svg" />
    </div>
  );
}

export default Header;
