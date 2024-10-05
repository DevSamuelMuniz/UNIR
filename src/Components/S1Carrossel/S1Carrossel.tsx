"use client"

import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { Paper, Button } from '@mui/material';

const items = [
  {
    name: "Item 1",
    description: "Descrição do Item 1",
    img: "https://via.placeholder.com/800x300?text=Item+1",
  },
  {
    name: "Item 2",
    description: "Descrição do Item 2",
    img: "https://via.placeholder.com/800x300?text=Item+2",
  },
  {
    name: "Item 3",
    description: "Descrição do Item 3",
    img: "https://via.placeholder.com/800x300?text=Item+3",
  },
];

export default function S1Carrossel(){
  return (
    <Carousel>
      {items.map((item, i) => (
        <Paper key={i}>
          <img src={item.img} alt={item.name} style={{ width: '100%', height: 'auto' }} />
          <h2>{item.name}</h2>
          <p>{item.description}</p>
          <Button>Saiba Mais</Button>
        </Paper>
      ))}
    </Carousel>
  );
};

