import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import JsxTheorie from "./components/JsxTheorie";
import HookUseState from "./components/HookUseState";
import HookUseEffect from "./components/HookUseEffect";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<JsxTheorie />} />
          <Route path="/hook-use-state" element={<HookUseState />} />
          <Route path="/hook-use-effect" element={<HookUseEffect />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
