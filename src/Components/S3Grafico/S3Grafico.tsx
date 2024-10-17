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
      borderRadius: 10,
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
    <main className="flex flex-col-reverse lg:flex-row justify-between items-center gap-8 p-4 lg:p-10 py-10">
      <div className="w-full lg:w-1/2 flex justify-center">
        <Paper elevation={3} className="w-full max-w-xl p-6">
          <h2 className="text-lg font-semibold text-center mb-4">Vendas por Tipo de Empresa</h2>
          <div className="w-full h-auto">
            <Bar data={data} options={options} />
          </div>
        </Paper>
      </div>

      <div className="w-full lg:w-1/2 flex flex-col gap-8 text-center justify-center">
        <h1 className="text-4xl lg:text-6xl text-[#15407D] font-bold">
          AUMENTE SEUS <span className="text-[#288226]">GANHOS</span>
        </h1>
        <h2 className="text-xl lg:text-2xl text-[#15407D] font-bold">
          REDUZA SEU TRABALHO!
        </h2>
        <p className="text-2xl lg:text-3xl text-[#15407D] font-bold">
          COM NOSSAS SOLUÇÕES INOVADORAS
        </p>
      </div>
    </main>
  );
}
