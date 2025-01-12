import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEllipsisVertical,
  faEarthAsia,
  faCircleQuestion,
  faKeyboard,
  faUser,
  faCoins,
  faGear,
  faSignOut,
} from "@fortawesome/free-solid-svg-icons";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import "~/components/GlobalStyle";

import styles from "./Header.module.scss";
import images from "~/assets/images";
import Button from "~/components/Button";
import Menu from "~/components/Popper/Menu";
import { MessageIcon, NotificationIcon, UploadIcon } from "~/components/Icons";
import Image from "~/components/Image";
import Search from "../Search";

const cx = classNames.bind(styles);

function Header() {
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
      separate: true,
    },
  ];

  return (
    <header className={cx("wrapper")}>
      <div className={cx("inner")}>
        <div className={cx("logo")}>
          <img src={images.logo} alt="logo" />
        </div>

        <Search />

        <div className={cx("action")}>
          {currentUser ? (
            <>
              <Tippy delay={[0, 50]} content="upload video" placement="bottom">
                <button className={cx("action-btn")}>
                  <UploadIcon />
                </button>
              </Tippy>
              <Tippy delay={[0, 50]} content="message" placement="bottom">
                <button className={cx("action-btn")}>
                  <MessageIcon />
                </button>
              </Tippy>
              <Tippy delay={[0, 50]} content="Notification" placement="bottom">
                <button className={cx("action-btn")}>
                  <NotificationIcon />
                  <span className={cx("badge")}>12</span>
                </button>
              </Tippy>
            </>
          ) : (
            <>
              <Button text>Upload</Button>
              <Button primary>Log in</Button>
            </>
          )}

          <Menu
            items={currentUser ? userMenu : MENU_ITEMS}
            onChange={handleMenuOnchange}
          >
            {currentUser ? (
              <Image
                className={cx("user-avatar")}
                src="https://p9-sign-sg.tiktokcdn.com/aweme/1080x1080/tos-alisg-avt-0068/a2d2c37ba7952fef60229d0354a02046.jpeg?lk3s=a5d48078&nonce=78801&refresh_token=9114b02c64d633858797cb60ea051dff&x-expires=1736190000&x-signature=%2FU27H0zVGpujjOw%2Fh3tflKfm63E%3D&shp=a5d48078&shcp=81f88b70"
                alt="trang"
                fallback="https://files.fullstack.edu.vn/f8-prod/user_avatars/1/623d4b2d95cec.png"
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
