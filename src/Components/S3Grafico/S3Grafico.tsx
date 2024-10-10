"use client"

// src/Components/S3Grafico/S3Grafico.jsx
import React from "react";
import { Bar } from "react-chartjs-2";
import { Paper } from "@mui/material";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Registrar as escalas e componentes necessários
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

// Dados fictícios de vendas
const data = {
  labels: ["Empresas com Site", "Empresas sem Site"],
  datasets: [
    {
      label: "Vendas",
      data: [4000, 2400],
      backgroundColor: ["rgba(75, 192, 192, 0.6)", "rgba(255, 99, 132, 0.6)"],
      borderColor: ["rgba(75, 192, 192, 1)", "rgba(255, 99, 132, 1)"],
      borderWidth: 1,
    },
  ],
};

// Opções do gráfico
const options = {
  responsive: true,
  scales: {
    y: {
      beginAtZero: true,
    },
  },
};

export default function S3Grafico() {
  return (
    <div>
      <Paper elevation={3} style={{ padding: "20px", margin: "20px" }}>
        <h2>Vendas por Tipo de Empresa</h2>
        <Bar data={data} options={options} />
      </Paper>
    </div>
  );
}
