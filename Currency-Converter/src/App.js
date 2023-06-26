import "./App.css";
import { Route, Routes } from "react-router-dom";

import CurrencyConverter from "./Currency/CurrencyConverter"


function App() {

  return (
    <div>
      <Header />
      <Routes> 
        <Route path="/" element={<CurrencyConverter />} />
      </Routes>
    </div>
  );
}

export default App;
