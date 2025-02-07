import { faCircleXmark, faSpinner } from "@fortawesome/free-solid-svg-icons";
import HeadlessTippy from "@tippyjs/react/headless";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState, useRef } from "react";
import classNames from "classnames/bind";
import axios from "axios";

import { Wrapper as PopperWrapper } from "~/components/Popper";
import AccountItem from "~/components/AccountItem";
import { SearchIcon } from "~/components/Icons";
import styles from "./Search.module.scss";
import { useDebounce } from "~/Hook";
import * as searchServices from "~/apiServices/searchServices";

const cx = classNames.bind(styles);

function Search() {
  const [searchValue, setSearchValue] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [showMenu, setShowMenu] = useState(true);
  const [loading, setLoading] = useState(false);
  const debounced = useDebounce(searchValue, 500);

  const inputRef = useRef();

  const handleOnchange = (value) => {
    setSearchValue(value);
  };

  const handleTyping = (e) => {
    const valueInput = e.target.value;
    if(!valueInput.startsWith(" ")){
      handleOnchange(e.target.value)
    }
  }

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
    if (!debounced.trim()) {
      setSearchResult([]);
      return;
    }

    const fechApi = async () => {
      setLoading(true);
      const result = await searchServices.search(debounced);
      setSearchResult(result);
      setLoading(false);
    };
    fechApi();
  }, [debounced]);

  return (
    <HeadlessTippy
      interactive
      visible={showMenu && searchResult.length > 0}
      appendTo="parent"
      render={(attrs) => (
        <div className={cx("search-result")} tabIndex="-1" {...attrs}>
          <PopperWrapper>
            <h4 className={cx("search-title")}>Accounts</h4>
            {searchResult.map((result) => (
              <AccountItem key={result.id} data={result} />
            ))}
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
          onChange={handleTyping}
          onFocus={() => setShowMenu(true)}
        />
        {!!searchValue && !loading && (
          <button className={cx("clear")} onClick={handleClear}>
            <FontAwesomeIcon icon={faCircleXmark} />
          </button>
        )}
        {loading && (
          <FontAwesomeIcon className={cx("spinner")} icon={faSpinner} />
        )}
        <button className={cx("search-btn")} onMouseDown={e => e.preventDefault()}>
          <SearchIcon />
        </button>
      </div>
    </HeadlessTippy>
  );
}

export default Search;
