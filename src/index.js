import React from "react";
import ReactDOM, { render } from "react-dom";
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";

import "./index.css";
import App from "./App";

//Rutes
import Home from "./components/Home";
import About from "./components/About";
import Pricing from "./components/Pricing";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="home" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="pricing" element={<Pricing />} />
      </Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
