import React, { useState } from "react";
import styles from "./Section.module.css";
import { CircularProgress } from "@mui/material";
import Card from "../Card/Card";
import Carousel from "../Carousel/Carousel";
import BasicTabs from "../Tabs/Tabs";

const Section = ({
  title,
  data,
  type,
  value = 0,
  handleChange = null,
  filteredDataValues = [],
}) => {
  const [carouselToggle, setCarouselToggle] = useState(true);

  const handleToggle = () => {
    setCarouselToggle(!carouselToggle);
  };
  return (
    <div>
      <div className={styles.header}>
        <h3>{title}</h3>
        <h4 className={styles.toggleText} onClick={handleToggle}>
          {carouselToggle ? "Show All" : "Collapse All"}
        </h4>
      </div>
      {type === "song" ? (
        <BasicTabs value={value} handleChange={handleChange} />
      ) : null}
      {!data?.length ? (
        <CircularProgress />
      ) : (
        <div className={styles.cardWrapper}>
          {!carouselToggle ? (
            <div className={styles.wrapper}>
              {filteredDataValues.map((item) => {
                return <Card key={item.id} data={item} type={type} />;
              })}
            </div>
          ) : (
            <Carousel
              data={filteredDataValues}
              componentRender={(ele) => <Card data={ele} type={type} />}
            />
          )}
        </div>
      )}
    </div>
  );
};

export default Section;
