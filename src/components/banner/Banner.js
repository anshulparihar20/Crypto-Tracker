import { Container, Typography } from "@mui/material";
import React from "react";
import Carousel from "./Carousel";

const Banner = () => {
  return (
    <div className="banner">
      <Container className="bannerContent">
        <div className="tagLine">
          <Typography
            variant="h2"
            style={{
              fontWeight: "bold",
              marginBottom: 15,
              fontFamily: "Roboto",
            }}
          >
            Crypto Tracker
          </Typography>

          <Typography
            variant="subtitle2"
            style={{
              color: "darkgray",
              textTransform: "capitalize",
              fontFamily: "Roboto",
            }}
          >
            Get all the Info regarding your favorite Crypto Currency..
          </Typography>
        </div>
        <Carousel />
      </Container>
    </div>
  );
};

export default Banner;
