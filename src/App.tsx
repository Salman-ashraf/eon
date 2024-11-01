import BuilderPage from "./builder-page";
import { Route, Routes } from "react-router";
import Home from "./components/Home";
import Editor from "./components/Editor";

function App() {
  return (
    <>
      <Routes>
        <Route path="/builder-demo" element={<BuilderPage />} />
        <Route path="/" element={<Editor />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
