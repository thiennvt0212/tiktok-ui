import { faCircleXmark, faSpinner } from "@fortawesome/free-solid-svg-icons";
import HeadlessTippy from "@tippyjs/react/headless";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState, useRef } from "react";
import classNames from "classnames/bind";

import { Wrapper as PopperWrapper } from "~/components/Popper";
import AccountItem from "~/components/AccountItem";
import { SearchIcon } from "~/components/Icons";
import styles from "./Search.module.scss";

const cx = classNames.bind(styles);

function Search() {
  const [searchValue, setSearchValue] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [showMenu, setShowMenu] = useState(true);

  const inputRef = useRef();

  const handleOnchange = (value) => {
    setSearchValue(value);
  };

  const handleClear = () => {
    setSearchValue("");
    setSearchResult([]);
    inputRef.current.focus();
    setShowMenu(false);
  };

  const handleHideMenu = () => {
    setShowMenu(false);
  };

  useEffect(() => {
    setTimeout(() => {
      setSearchResult([1, 2, 343]);
    }, 0);
  }, []);

  return (
    <HeadlessTippy
      interactive
      visible={showMenu && searchResult.length > 0}
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
      onClickOutside={handleHideMenu}
    >
      <div className={cx("search")}>
        <input
          ref={inputRef}
          placeholder="Search account and videos"
          spellCheck={false}
          value={searchValue}
          onChange={(e) => handleOnchange(e.target.value)}
          onFocus={() => setShowMenu(true)}
        />
        {!!searchValue && (
          <button className={cx("clear")} onClick={handleClear}>
            <FontAwesomeIcon icon={faCircleXmark} />
          </button>
        )}
        {/* <FontAwesomeIcon className={cx("spinner")} icon={faSpinner} /> */}
        <button className={cx("search-btn")}>
          <SearchIcon />
        </button>
      </div>
    </HeadlessTippy>
  );
}

export default Search;
