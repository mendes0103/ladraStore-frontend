import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";

function Publico_Sabio_App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default Publico_Sabio_App;
