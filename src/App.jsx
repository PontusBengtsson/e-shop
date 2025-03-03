import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./Header/Header";
import Produkter from "./pages/Produkter";
import OmOss from "./pages/OmOss";
import Kontakt from "./pages/Kontakt";
import HomePage from "./pages/HomePage"; // Importera startsidan

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} /> {/* Lägg till startsidan */}
        <Route path="/produkter" element={<Produkter />} />
        <Route path="/om-oss" element={<OmOss />} />
        <Route path="/kontakt" element={<Kontakt />} />
      </Routes>
    </>
  );
};

export default App;
