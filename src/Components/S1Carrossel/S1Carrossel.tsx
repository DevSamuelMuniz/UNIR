"use client";

import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Image from "next/image";

const items = [
  {
    img: "/Assets/Imgs/bannerSite1.png",
  },
  {
    img: "/Assets/Imgs/bannerSite2.png",
  },
  {
    img: "/Assets/Imgs/bannerSite3.png",
  },
  {
    img: "/Assets/Imgs/bannerSite4.png",
  },
];

export default function S1Carrossel() {
  return (
    <Carousel
      className="flex flex-col justify-center mt-16 md:my-20"
      NextIcon={<ArrowForwardIosIcon />}
      PrevIcon={<ArrowBackIosIcon />}
      navButtonsAlwaysVisible={false}
    >
      {items.map((item, i) => (
        <Paper key={i} elevation={0} className="flex justify-center">
          <img
            src={item.img}
            alt={`Banner do Carrossel ${i + 1}`} // Descrição mais detalhada
            width={800} // Defina a largura adequada
            height={450} // Defina a altura adequada
            className="w-4/5 max-w-full h-auto"
          />
        </Paper>
      ))}
    </Carousel>
  );
}
