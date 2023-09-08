import React from "react";
import { ReactComponent as HeroImage } from "../../assets/heroImage.svg";
import styles from "./HeroSection.module.css";

const HeroSection = () => {
  return (
    <section className={styles.herosection}>
      <HeroImage />
    </section>
  );
};

export default HeroSection;
