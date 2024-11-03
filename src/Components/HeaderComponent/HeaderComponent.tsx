"use client";
import { useState } from "react";
import {
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";



export default function HeaderComponent() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const section = document.querySelector(id);
    if (section) {
      const offset = 200;
      const sectionPosition = (section as HTMLElement).offsetTop - offset;
      window.scrollTo({
        top: sectionPosition,
        behavior: "smooth",
      });
    }
  };

  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }
      setIsDrawerOpen(open);
    };

  const menuItems = [
    { label: "Início", id: "#inicio" },
    { label: "Sobre nós", id: "#sobre" },
    { label: "Serviços", id: "#servicos" },
    { label: "Contatos", id: "#contatos" },
  ];

  return (
    <main className="fixed top-0 left-0 w-full z-50 flex justify-between items-center p-4 px-8 shadow-md bg-white">
      <a href="#" onClick={() => scrollToSection("#inicio")}>
F        <img
          className="w-24"
          src="/Assets/Imgs/logoSemNome.png"
          alt="Logo"
          width={96}
          height={96}
        />
      </a>

      {/* Menu para telas maiores */}
      <ul className="justify-center items-center gap-10 customSmall:gap-20 md:gap-8 lg:gap-20 customPhone:flex hidden text-[#0C2548] font-semibold">
        {menuItems.map((item) => (
          <li key={item.id} className="group relative">
            <button
              className="hover:no-underline"
              onClick={() => scrollToSection(item.id)}
            >
              {item.label}
            </button>
            <span className="absolute left-0 bottom-0 w-full h-[2px] bg-[#0C2548] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-left"></span>
          </li>
        ))}
      </ul>

      <a
        className="lg:p-3 text-sm p-2 md:flex hidden border-2 rounded-sm border-[#15407D] text-[#0C2548] font-semibold hover:bg-[#15407D] hover:text-white transition-colors"
        href="https://wa.me/5581984639299?text=Ol%C3%A1,%20gostaria%20de%20saber%20mais%20sobre%20sua%20empresa!"
        target="_blank"
      >
        TRABALHE CONOSCO
      </a>

      {/* Menu burger para telas pequenas */}
      <IconButton
        className="customPhone:hidden"
        edge="start"
        color="inherit"
        aria-label="menu"
        onClick={toggleDrawer(true)}
      >
        <MenuIcon />
      </IconButton>

      <Drawer anchor="right" open={isDrawerOpen} onClose={toggleDrawer(false)}>
        <div className="flex justify-center items-center py-2">
          {" "}
          {/* Centralizando a imagem */}
          <a href="#" onClick={() => scrollToSection("#inicio")}>
            <img
              className="w-24"
              src="/Assets/Imgs/logoSemNome.png"
              alt="Logo"
              width={96}
              height={96}
            />
          </a>
        </div>

        <List className="w-64 bg-white h-full flex flex-col items-end">
          {menuItems.map((item) => (
            <ListItem
              button
              className="p-2 border-2 rounded-sm border-[#15407D] text-[#0C2548] font-semibold hover:bg-[#15407D] hover:text-white transition-colors"
              key={item.id}
              onClick={() => {
                scrollToSection(item.id);
                setIsDrawerOpen(false); // Fechar o menu burger após clicar em uma opção
              }}
            >
              <ListItemText primary={item.label} />
            </ListItem>
          ))}

          <div className="flex-grow"></div>

          {/* TRABALHE CONOSCO */}
          <ListItem
            className="p-2 border-2 rounded-sm border-[#15407D] text-[#0C2548] font-semibold hover:bg-[#15407D] hover:text-white transition-colors mt-auto"
            style={{
              position: "absolute",
              bottom: "16px",
              width: "90%",
              margin: "0 5%",
            }}
            onClick={() => {
              scrollToSection("#contatos");
              setIsDrawerOpen(false); // Fechar o menu burger após clicar em uma opção
            }}
          >
            <ListItemText primary="TRABALHE CONOSCO" className="text-center" />
          </ListItem>
        </List>
      </Drawer>
    </main>
  );
}
