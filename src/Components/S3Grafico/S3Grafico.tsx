"use client";

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
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

// Dados fictícios de vendas
const data = {
  labels: ["Empresas com Site", "Empresas sem Site"],
  datasets: [
    {
      label: "Vendas",
      data: [4000, 2400],
      backgroundColor: ["#288226", "#CE2A2A"], 
      borderColor: ["#288226", "#CE2A2A"], 
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
    <main className="flex justify-evenly">
      <div>
        <Paper elevation={3} style={{ padding: "20px", margin: "20px" }}>
          <h2>Vendas por Tipo de Empresa</h2>
          <div style={{ width: "600px", height: "300px" }}>
            <Bar data={data} options={options} />
          </div>
        </Paper>
      </div>

      <div className="flex flex-col gap-16 text-center justify-center">
        <span >
          <h1 className="text-6xl text-[#15407D] font-bold">
            AUMENTE SEUS <span className="text-[#288226]">GANHOS</span>
          </h1>
          <h2 className="text-2xl text-[#15407D] font-bold">REDUZA SEU TRABALHO!</h2>
        </span>

        <p className="text-3xl text-[#15407D] font-bold">COM NOSSAS SOLUÇÕES INOVADORAS</p>
      </div>
    </main>
  );
}
