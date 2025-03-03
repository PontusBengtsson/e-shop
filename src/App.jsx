import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./Header/Header";
import Produkter from "./pages/Produkter";
import OmOss from "./pages/OmOss";
import Kontakt from "./pages/Kontakt";
import HomePage from "./pages/HomePage"; // Importera startsidan
import Footer from "./Footer/Footer";
import { Box } from "@mui/material";

const App = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header />
      <Box sx={{ flexGrow: 1 }}>
        <Routes>
          <Route path="/" element={<HomePage />} /> {/* Lägg till startsidan */}
          <Route path="/produkter" element={<Produkter />} />
          <Route path="/om-oss" element={<OmOss />} />
          <Route path="/kontakt" element={<Kontakt />} />
        </Routes>
      </Box>
      <Footer />
    </Box>
  );
};

export default App;
