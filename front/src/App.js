import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Picture } from "./pages/Picture";
import { Led } from "./pages/Led";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/Picture" element={<Picture />} />
          <Route exact path="/Led" element={<Led />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
