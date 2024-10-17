import React from "react";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import EmailIcon from "@mui/icons-material/Email";

export default function FooterComponent() {
  return (
    <main className="flex flex-col shadow-none">
      <div className="bg-[#15407D] flex flex-col lg:flex-row justify-evenly items-center p-6 lg:p-10 gap-4 lg:gap-0">
        <div className="text-white flex items-center">
          <div>
            <h1 className="text-lg lg:text-xl font-semibold flex items-center">
              <AccessTimeIcon className="mr-2" />
              Horário
            </h1>
            <p>Segunda à Sexta</p>
            <p>08:00h às 18:00h</p>
          </div>
        </div>

        <div className="text-white flex items-center">
          <div>
            <h1 className="text-lg lg:text-xl font-semibold flex items-center">
              <EmailIcon className="mr-2" />
              E-mail
            </h1>
            <p>contato.unityinnovation@gmail.com</p>
          </div>
        </div>
      </div>

      <div className="bg-[#0C2548] text-white flex justify-center text-center text-sm p-4">
        <h1>UNIR 2024 © Todos os direitos reservados.</h1>
      </div>
    </main>
  );
}
