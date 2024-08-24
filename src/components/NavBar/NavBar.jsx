import React from "react";

import styles from "./NavBar.module.css";
import Button from "../Button/Button";
import Logo from "../Logo/Logo";
import Search from "../Search/Search";

const NavBar = ({ data }) => {
  return (
    <nav className={styles.navbar}>
      <Logo />
      <Search placeholder="Search a song" data={data} />
      <Button children="Give Feedback" />
    </nav>
  );
};

export default NavBar;
