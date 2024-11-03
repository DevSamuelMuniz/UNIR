import React from "react";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import EmailIcon from "@mui/icons-material/Email";

import Image from "next/image";

export default function FooterComponent() {
  return (
    <main className="flex flex-col shadow-none relative">
      {" "}
      {/* Mantém o Footer como ponto de referência */}
      {/* Segunda div (Rodapé) */}
      <div className="bg-[#15407D] flex flex-col lg:flex-row flex-wrap justify-evenly items-center p-4 lg:p-10 gap-4 lg:gap-0 relative">
        {/* Div com cor FAFAFA, imagem e texto, visível apenas em telas grandes */}
        <div className="hidden lg:flex bg-[#FAFAFA] justify-between items-center p-4 rounded-lg shadow-md mb-4 max-w-5xl mx-auto absolute -top-16 left-0 right-0 z-10">
          <img
            src="/assets/imgs/logoSemFundo.png"
            alt="Logo"
            width={100} // Defina as dimensões
            height={48} // Defina as dimensões
            className="h-12 w-auto"
          />
          
          <p
            className="text-[#15407D] text-left p-4"
            style={{ fontSize: "14px" }}
          >
            Na Unir, somos três sócios—Eudes Jordão, John Alencar e Samuel
            Muniz—unidos por um desejo em comum: transformar a vida das pessoas
            e suas realidades por meio de soluções tecnológicas inovadoras. Com
            base na Bíblia Cristã, nossa ética e valores colocam Jesus no centro
            de todos os nossos sonhos e projetos.
          </p>
        </div>

        {/* Div com horário e e-mail, sempre visível */}
        <div className="text-white flex flex-col lg:flex-row items-center text-center lg:text-left pt-12">
          <div className="flex flex-col items-center">
            <h1 className="text-base lg:text-lg font-semibold flex items-center">
              <AccessTimeIcon className="mr-2" />
              Horário
            </h1>
            <p>Segunda à Sexta</p>
            <p>08:00 às 18:00</p>
          </div>
        </div>

        <div className="text-white flex flex-col lg:flex-row items-center text-center lg:text-left pt-10">
          <div className="flex flex-col items-center lg:items-start w-full">
            <h1 className="text-base lg:text-lg font-semibold flex items-center">
              <EmailIcon className="mr-2" />
              E-mail
            </h1>
            <p>unityinnovationrecife@gmail.com</p>
          </div>
        </div>
      </div>
      <div className="bg-[#0C2548] text-white flex justify-center text-center text-sm p-4">
        <h1>UNIR 2024 © Todos os direitos reservados.</h1>
      </div>
    </main>
  );
}
