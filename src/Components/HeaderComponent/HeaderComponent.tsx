"use client";
import { useState } from "react";
import { IconButton, Drawer, List, ListItem, ListItemText } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

export default function HeaderComponent() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const scrollToSection = (id: any) => {
    const section = document.querySelector(id);
    const offset = 200;
    const sectionPosition = section.offsetTop - offset;
    window.scrollTo({
      top: sectionPosition,
      behavior: "smooth",
    });
  };

  const toggleDrawer = (open: boolean) => (event: any) => {
    if (event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) {
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
      <img className="w-24" src="/Assets/Imgs/Header/logoSemNome.png" alt="Logo" />

      {/* Menu para telas maiores */}
      <ul className="justify-center items-center gap-10 customSmall:gap-20 md:gap-8 lg:gap-20 customPhone:flex hidden text-[#0C2548] font-semibold">
        {menuItems.map((item) => (
          <li key={item.id} className="group relative">
            <button className="hover:no-underline" onClick={() => scrollToSection(item.id)}>
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
        <List className="w-64 bg-white h-full">
          {menuItems.map((item) => (
            <ListItem button key={item.id} onClick={() => scrollToSection(item.id)}>
              <ListItemText primary={item.label} />
            </ListItem>
          ))}
          <ListItem button onClick={() => scrollToSection("#contatos")}>
            <ListItemText primary="TRABALHE CONOSCO" />
          </ListItem>
        </List>
      </Drawer>
    </main>
  );
}
