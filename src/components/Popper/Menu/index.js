import Tippy from "@tippyjs/react/headless";
import classNames from "classnames/bind";
import { Wrapper as PopperWrapper } from "~/components/Popper";

import styles from "./menu.module.scss";
import MenuItem from "./MenuItem";

const cx = classNames.bind(styles);

function Menu({ children , items= []}) {

  const renderItems = () =>{
    return items.map((item, index) => <MenuItem data={item} key={index}/>
  )}

  return (
    <Tippy
      interactive
      placement="bottom-end"
      delay={[0, 700]}
      // visible
      appendTo="parent"
      render={(attrs) => (
        <div className={cx("menu-list")} tabIndex="-1" {...attrs}>
          <PopperWrapper className={cx("menu-popper")}>
           {renderItems()}
          </PopperWrapper>
        </div>
      )}
    >
      {children}
    </Tippy>
  );
}

export default Menu;
