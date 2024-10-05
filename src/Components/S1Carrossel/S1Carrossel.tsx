"use client";

import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { Paper } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const items = [
  {
    img: "/Assets/Imgs/S1Carrossel/bannerSite.png",
  },
  {
    img: "/Assets/Imgs/S1Carrossel/bannerSite.png",
  },
  {
    img: "/Assets/Imgs/S1Carrossel/bannerSite.png",
  },
];

export default function S1Carrossel() {
  return (
    <Carousel
      className='flex flex-col justify-center mx-32 my-20'
      // Ícone para avançar
      NextIcon={<ArrowForwardIosIcon />}
      // Ícone para voltar
      PrevIcon={<ArrowBackIosIcon />}
      // Mostra as setas sempre
      navButtonsAlwaysVisible={false}
    >
      {items.map((item, i) => (
        <Paper key={i}>
          <img src={item.img} alt='Banner' style={{ width: '100%', height: 'auto' }} />
        </Paper>
      ))}
    </Carousel>
  );
};
