import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "../components/pages/About";
import Home from "../components/pages/Home";
import Header from "../components/atom/Header";
import WatterMark from "../components/atom/WatterMark";
import Contect from "../components/pages/Contect";
import Work from "../components/pages/Work";
import WorkView from "../components/pages/WorkView";

const AboutCont = () => (
  <>
    <Header />
    <About />
  </>
);

const ContectCont = () => (
  <>
    <Header />
    <Contect />
  </>
);

const WorkCont = () => (
  <>
    <Header />
    <Work />
  </>
);

function Router() {
  return (
    <BrowserRouter>
      <WatterMark />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutCont />} />
        <Route path="/work" element={<WorkCont />} />
        <Route path="/work/:title" element={<WorkView />} />
        <Route path="/contect" element={<ContectCont />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
