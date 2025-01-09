import Tippy from "@tippyjs/react/headless";
import classNames from "classnames/bind";
import { Wrapper as PopperWrapper } from "~/components/Popper";

import styles from "./menu.module.scss";
import MenuItem from "./MenuItem";
import Header from "./Header";
import { useState } from "react";

const cx = classNames.bind(styles);

const defaultFuntion = ()=>{};

function Menu({ children, items = [] , onChange = defaultFuntion}) {
  const [history, setHistory] = useState([
    {
      data: items,
    },
  ]);

  const current = history[history.length - 1];

  const renderItems = () => {
    return current.data.map((item, index) => {
      const isParent = !!item.children;
      return (
        <MenuItem
          data={item}
          key={index}
          onClick={() => {
            if (isParent) {
              console.log(item.children);

              setHistory((prev) => [...prev, { data: item.children }]);
            } else{
              onChange(item)
            }
          }}
        />
      );
    });
  };

  return (
    <Tippy
      interactive
      placement="bottom-end"
      delay={[0, 700]}
      offset={[12, 8]}
      // visible
      appendTo="parent"
      render={(attrs) => (
        <div className={cx("menu-list")} tabIndex="-1" {...attrs}>
          <PopperWrapper className={cx("menu-popper")}>
            {history.length > 1 && (
              <Header
                title={"Language"}
                onBack={() => {
                  setHistory((prev) => prev.slice(0, prev.length - 1));
                }}
              />
            )}
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
