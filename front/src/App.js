import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Picture } from "./pages/Picture";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/Picture" element={<Picture />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
