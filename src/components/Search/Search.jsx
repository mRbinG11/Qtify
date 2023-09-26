import React, { useState } from "react";
import { ReactComponent as SearchIcon } from "../../assets/searchIcon.svg";
import styles from "./Search.module.css";

const Search = ({ placeholder, data }) => {
  const [val, setVal] = useState(null);
  const onSubmit = (e) => {
    e.preventDefault();
  };

  const changeHandler = (e) => {
    console.log(e.target.value);
    setVal(e.target.value);
    // eslint-disable-next-line no-unused-vars
    const res = data.filter((item) => item.title.includes(e.target.value));
  };

  return (
    <>
      <form className={styles.wrapper} onSubmit={onSubmit}>
        <input
          className={styles.search}
          placeholder={placeholder}
          required
          value={val}
          onChange={changeHandler}
        />
        <button className={styles.searchBtn} type="submit">
          <SearchIcon />
        </button>
      </form>
      {val ? <></> : null}
    </>
  );
};

export default Search;
