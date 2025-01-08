import classNames from "classnames/bind";
import Button from "~/components/Button";

import styles from "./menu.module.scss"

const cx = classNames.bind(styles);
function MenuItem({data}) {

    console.log("menu-item class:", styles["menu-item"]);

  return (
    <Button className={cx("menu-item")} iconLeft={data.icon} to={data.to}>
      {data.title}
    </Button>
  );
}

export default MenuItem;
