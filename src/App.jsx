import "bootstrap/dist/css/bootstrap.min.css";
import HeaderNavbar from "./components/HeaderNavbar";

import { useRef } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Transport from "./pages/Transport";
import Charters from "./pages/Charters";
import Engines from "./pages/Engines";
import Trailers from "./pages/Trailers";
import Trailers2 from "./pages/Trailers2";
import Chandlery from "./pages/Chandlery";
import Berths from "./pages/Berths";
import Buy from "./pages/Buy";
import Sell from "./pages/Sell";
import Services from "./pages/Services";
import EngineDetailPage from "./components/Engine/EngineDetail";
import TrailerDetail from "./components/Trailers/TrailerDetail";

function App() {
  const navbarRef = useRef();
  return (
    <BrowserRouter>
      <HeaderNavbar {...{ navbarRef }}></HeaderNavbar>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/transport" element={<Transport />}></Route>
        <Route path="/charters" element={<Charters type="advert"/>}></Route>
        <Route path="/engines" element={<Engines type="advert" />} />
        <Route path="/advert-engines" element={<Engines type="search" />} />
        <Route path="/trailers2" element={<Trailers2 />}></Route>
        <Route path="/trailers" element={<Trailers type="advert" />}></Route>
        <Route
          path="/advert-trailers"
          element={<Trailers type="trailers" />}
        ></Route>
        <Route path="/chandlery" element={<Chandlery />}></Route>
        <Route path="/berths" element={<Berths type="search" />} />
        <Route path="/advert-berth" element={<Berths type="advert" />} />
        <Route path="/buy" element={<Buy />}></Route>
        <Route path="/sell" element={<Sell />}></Route>
        <Route path="/services" element={<Services type="myEngines"/>}></Route>
        <Route path="/engines/:id" element={<EngineDetailPage />} />
        <Route path="/trailer/:id" element={<TrailerDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
