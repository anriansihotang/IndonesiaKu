import { BrowserRouter, Routes, Route } from "react-router-dom";
// import MainDestination from "./components/MainDestination";
import Home from "./pages/Home";
// import Destination from "./pages/Destination";
import Destinasi from "./pages/Destinasi";
import Event from "./pages/Event";
import PageArticle from "./pages/PageArticle";
import Staycation from "./pages/Staycation";
import UMKM from "./pages/UMKM";
import "./styles/Header.css";
import Header from "./components/Header";
import ButtonScroll from "./components/ButtonScroll";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" exact element={<Home />} />{" "}
        <Route path="/destinasi/:id" exact element={<Destinasi />} />{" "}
        <Route path="/Event" element={<Event />} />{" "}
        <Route path="/Staycation" element={<Staycation />} />{" "}
        <Route path="/UMKM" element={<UMKM />} />{" "}
        <Route path="/PageArticle" exact element={<PageArticle />} />{" "}
      </Routes>{" "}
      <ButtonScroll />
    </BrowserRouter>
  );
}

export default App;
