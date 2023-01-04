import { BrowserRouter, Routes, Route } from "react-router-dom";
import Conocenos from "./pages/Conocenos";

import Home from "./pages/Home";
import OutSourcing from "./pages/OutSourcing";
import AsesoriaTributaria from "./pages/AsesoriaTributaria";
import AsesoriaLaboral from "./pages/AsesoriaLaboral";
import AsesoriaFinanciera from "./pages/AsesoriaFinanciera";
import AsesoriaAdministrativa from "./pages/AsesoriaAdministrativa";
import AsesoriaContable from "./pages/AsesoriaContable";
import Empresa from "./pages/Empresa";
import ElContacto from "./pages/ElContacto";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/conocenos" element={<Conocenos />} />
        <Route path="/Outsourcing" element={<OutSourcing />} />
        <Route path="/AsesoriaTributaria" element={<AsesoriaTributaria />} />
        <Route path="/AsesoriaLaboral" element={<AsesoriaLaboral />} />
        <Route path="/AsesoriaFinanciera" element={<AsesoriaFinanciera />} />
        <Route
          path="/AsesoriaAdministrativa"
          element={<AsesoriaAdministrativa />}
        />
        <Route path="/AsesoriaContable" element={<AsesoriaContable />} />
        <Route path="/Empresa" element={<Empresa />} />
        <Route path="/Contacto" element={<ElContacto />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
