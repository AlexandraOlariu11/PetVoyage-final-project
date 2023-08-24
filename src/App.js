import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavbarContainer from "./containers/NavbarContainer";
import DespreNoi from "./pages/DespreNoi"; 
import Contact from "./pages/Contact"; 
import HomePage from "./pages/HomePage";



function App() { 
  return (
  <>
  <NavbarContainer/>
  <div className="container">
<Routes>
<Route path="/home" element={<HomePage/>} />
<Route path="/about" element={<DespreNoi/>} />
<Route path="/contact" element={<Contact/>} />
</Routes>
  </div>
  </>
  )
}

export default App;