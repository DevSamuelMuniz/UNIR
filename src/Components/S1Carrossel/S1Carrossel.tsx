"use client";

import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

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
  {
    img: "/Assets/Imgs/S1Carrossel/bannerSite5.png",
  },
];

export default function S1Carrossel() {
  return (
    <Carousel
      className="flex flex-col justify-center mx-72 my-20"
      // Ícone para avançar 
      NextIcon={<ArrowForwardIosIcon />}
      // Ícone para voltar
      PrevIcon={<ArrowBackIosIcon />}
      // Mostra as setas sempre
      navButtonsAlwaysVisible={false}
    >
      {items.map((item, i) => (
        <Paper key={i} className="flex justify-center">

          <img
            src={item.img}
            alt="Banner"
          />
        </Paper>
      ))}
    </Carousel>
  );
}
