import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DemoPage from "./pages/DemoPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<DemoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
