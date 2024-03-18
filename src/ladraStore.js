import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";

function LadraStore_App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default LadraStore_App;
