import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import JsxTheorie from "./components/JsxTheorie";
import HookUseState from "./components/HookUseState";
import HookUseEffect from "./components/HookUseEffect";
import Navbar from "./components/Navbar";
import Form from "./components/Form";
import List from "./components/List";
import ExerciceFruits from "./components/ExerciceFruits";

function App() {
  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<JsxTheorie />} />
          <Route path="/hook-use-state" element={<HookUseState />} />
          <Route path="/hook-use-effect" element={<HookUseEffect />} />
          <Route path="/formulaire" element={<Form />} />
          <Route path="/liste" element={<List />} />
          <Route path="/exercice" element={<ExerciceFruits />} />
          {/* <Route path */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
