import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleXmark,
  faSpinner,
  faMagnifyingGlass,
  faEllipsisVertical,
  faEarthAsia,
  faCircleQuestion,
  faKeyboard,
  faCloudArrowUp,
  faUser,
  faCoins,
  faGear,
  faSignOut,
} from "@fortawesome/free-solid-svg-icons";
import HeadlessTippy from "@tippyjs/react/headless";
import Tippy from "@tippyjs/react";
import { Children, useEffect, useState } from "react";
import "tippy.js/dist/tippy.css";

import "~/components/GlobalStyle";
import styles from "./Header.module.scss";
import images from "~/assets/images";
import { Wrapper as PopperWrapper } from "~/components/Popper";
import AccountItem from "~/components/AccountItem";
import Button from "~/components/Button";
import Menu from "~/components/Popper/Menu";

const cx = classNames.bind(styles);

function Header() {
  const [result, setResult] = useState([]);

  const currentUser = true;

  const MENU_ITEMS = [
    {
      title: "English",
      icon: <FontAwesomeIcon icon={faEarthAsia} />,
      children: [
        {
          type: "Languages",
          code: "en",
          title: "English",
        },
        {
          type: "Languages",
          code: "vi",
          title: "Việt nam",
        },
      ],
    },
    {
      title: "Feedback and help",
      icon: <FontAwesomeIcon icon={faCircleQuestion} />,
      to: "/feedback",
    },
    {
      title: "Keyboard",
      icon: <FontAwesomeIcon icon={faKeyboard} />,
    },
  ];

  useEffect(() => {
    setTimeout(() => {
      setResult([]);
    }, 0);
  }, []);

  const handleMenuOnchange = (menuItem) => {
    console.log(menuItem);
  };

  const userMenu = [
    {
      title: "View profile",
      icon: <FontAwesomeIcon icon={faUser} />,
      to: "/@htrang",
    },
    {
      title: "Get coins",
      icon: <FontAwesomeIcon icon={faCoins} />,
      to: "/coins",
    },
    {
      title: "Setting",
      icon: <FontAwesomeIcon icon={faGear} />,
      to: "/feedback",
    },
    ...MENU_ITEMS,
    {
      title: "Log out",
      icon: <FontAwesomeIcon icon={faSignOut} />,
      to: "/signOut",
      separate : true,
    },
  ]

  return (
    <header className={cx("wrapper")}>
      <div className={cx("inner")}>
        <div className={cx("logo")}>
          <img src={images.logo} alt="logo" />
        </div>
        <HeadlessTippy
          interactive
          visible={result.length > 0}
          appendTo="parent"
          render={(attrs) => (
            <div className={cx("search-result")} tabIndex="-1" {...attrs}>
              <PopperWrapper>
                <h4 className={cx("search-title")}>Accounts</h4>
                <AccountItem />
                <AccountItem />
                <AccountItem />
                <AccountItem />
              </PopperWrapper>
            </div>
          )}
        >
          <div className={cx("search")}>
            <input placeholder="Search account and videos" spellCheck={false} />
            <button className={cx("clear")}>
              <FontAwesomeIcon icon={faCircleXmark} />
            </button>
            <FontAwesomeIcon className={cx("spinner")} icon={faSpinner} />
            <button className={cx("search-btn")}>
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
          </div>
        </HeadlessTippy>

        <div className={cx("action")}>
          {currentUser ? (
            <>
              <Tippy content="upload video" placement="bottom">
                <button className={cx("upload-btn")}>
                  <FontAwesomeIcon icon={faCloudArrowUp} />
                </button>
              </Tippy>
            </>
          ) : (
            <>
              <Button text>Upload</Button>
              <Button primary>Log in</Button>
            </>
          )}

          <Menu items={currentUser ? userMenu :  MENU_ITEMS} onChange={handleMenuOnchange}>
            {currentUser ? (
              <img
                className={cx("user-avatar")}
                src="https://p9-sign-sg.tiktokcdn.com/aweme/1080x1080/tos-alisg-avt-0068/a2d2c37ba7952fef60229d0354a02046.jpeg?lk3s=a5d48078&nonce=78801&refresh_token=9114b02c64d633858797cb60ea051dff&x-expires=1736190000&x-signature=%2FU27H0zVGpujjOw%2Fh3tflKfm63E%3D&shp=a5d48078&shcp=81f88b70"
                alt="trang"
              />
            ) : (
              <button className={cx("menu-btn")}>
                <FontAwesomeIcon icon={faEllipsisVertical} />
              </button>
            )}
          </Menu>
        </div>
      </div>
    </header>
  );
}

export default Header;
