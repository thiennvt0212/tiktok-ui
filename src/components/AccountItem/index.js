import classNames from "classnames/bind";
import styles from "./AccountItem.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);
function AccountItem() {
  return (
    <div className={cx("wrapper")}>
      <img 
      className={cx("avatar")}
      src="https://p9-sign-sg.tiktokcdn.com/aweme/1080x1080/tos-alisg-avt-0068/a2d2c37ba7952fef60229d0354a02046.jpeg?lk3s=a5d48078&nonce=78801&refresh_token=9114b02c64d633858797cb60ea051dff&x-expires=1736190000&x-signature=%2FU27H0zVGpujjOw%2Fh3tflKfm63E%3D&shp=a5d48078&shcp=81f88b70" alt="trang" />
      <div className={cx("info")}>
        <h4 className={cx("name")}>
          <span>Vũ Thị Huyền Trang</span>
            <FontAwesomeIcon className={cx("check")} icon={faCheckCircle}/>
        </h4>
        <span className={cx("username")}>huyenTrang</span>
      </div>
    </div>
  );
}

export default AccountItem;
