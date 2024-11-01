import BuilderPage from "./builder-page";
import { Route, Routes } from "react-router";
import Home from "./components/Home";
import Editor from "./components/Editor";
import Home2 from "./components/Home2";

function App() {
  return (
    <>
      <Routes>
        <Route path="/builder-demo" element={<BuilderPage />} />
        <Route path="/" element={<Editor />} />
        <Route path="/home" element={<Home />} />
        <Route path="/home2" element={<Home2 />} />
      </Routes>
    </>
  );
}

export default App;
