"use client";

import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Image from "next/image";

const items = [
  {
    img: "/Assets/Imgs/S1Carrossel/bannerSite1.png",
  },
  {
    img: "/Assets/Imgs/S1Carrossel/bannerSite2.png",
  },
  {
    img: "/Assets/Imgs/S1Carrossel/bannerSite3.png",
  },
  {
    img: "/Assets/Imgs/S1Carrossel/bannerSite4.png",
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
        // Defina a elevação como 0 para remover sombras
        <Paper key={i} elevation={0} className="flex justify-center">
          <Image
            src={item.img}
            alt={`Banner ${i + 1}`}
            width={800} // Defina a largura adequada
            height={450} // Defina a altura adequada
            className="w-4/5 max-w-full h-auto"
          />
        </Paper>
      ))}
    </Carousel>
  );
}
