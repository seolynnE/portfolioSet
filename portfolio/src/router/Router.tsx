import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "../components/pages/About";
import Home from "../components/pages/Home";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/:about" element={<About />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
