import { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, DetailPage } from "./pages/index.mjs";

function App() {
  const [count, setCount] = useState(0);

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
