import React from "react";
import styles from "./MenuItem.module.css";

const MenuItem = ({ album }) => {
  console.log("album", album);
  const { image, follows, title } = album;
  return (
    <div className={styles.menuItem}>
      <img src={image} alt="album" />
      <p>{title}</p>
      <p>{follows} Follow</p>
    </div>
  );
};

export default MenuItem;
