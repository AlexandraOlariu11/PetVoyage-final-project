import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { Route, Routes } from "react-router-dom";
import NavbarContainer from "./containers/NavbarContainer";
import DespreNoi from "./pages/aboutUs/DespreNoi"; 
import Contact from "./pages/contact/Contact"; 
import HomePage from "./pages/home/HomePage";



function App() { 
  return (
  <>
    <NavbarContainer/>
    <div >
    <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="/home" element={<HomePage/>} />
      <Route path="/about" element={<DespreNoi/>} />
      <Route path="/contact" element={<Contact/>} />
    </Routes>
    </div>
    </>
  )
}

export default App;