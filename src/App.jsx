import { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, DetailPage } from "./pages/index.mjs";
import { BiddingContext } from "./context/Context.mjs";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/vehicle/:id" element={<DetailPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
