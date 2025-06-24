import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import JsxTheorie from "./components/JsxTheorie";
import HookUseState from "./components/HookUseState";
import HookUseEffect from "./components/HookUseEffect";
import Navbar from "./components/Navbar";
import Form from "./components/Form";
import List from "./components/List";
import ExerciceFruits from "./components/exerciceFruits/ExerciceFruits";
import { RequestApi } from "./components/RequestApi";
import { Flux } from "./components/Flux";
import { CustomHook } from "./components/CustomHook";

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
          <Route path="/requete-api" element={<RequestApi />} />
          <Route path="/hook-perso" element={<CustomHook />} />
          <Route path="/flux" element={<Flux />} />
          {/* <Route path */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
