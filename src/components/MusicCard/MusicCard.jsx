import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import React from "react";
import MusicCardImage from "../MusicCardImage/MusicCardImage";
import styles from "./MusicCard.module.css";

const MusicCard = () => {
  return (
    <Card className={styles.musiccard}>
      <CardMedia className={styles.musiccardmedia}>
        <MusicCardImage />
      </CardMedia>
      <CardContent>
        <Typography className={styles.musiccardtitle}>New Bollywood</Typography>
      </CardContent>
    </Card>
  );
};

export default MusicCard;
