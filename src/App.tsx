import BuilderPage from "./builder-page";
import { Route, Routes } from "react-router";
import Home from "./Layout/Home";
import Editor from "./components/Editor";
import Home2 from "./Layout/Home2";
import Home3 from "./Layout/Home3";

function App() {
  return (
    <>
      <Routes>
        <Route path="/builder-demo" element={<BuilderPage />} />
        <Route path="/" element={<Editor />} />
        <Route path="/home" element={<Home />} />
        <Route path="/home2" element={<Home2 />} />
        <Route path="/home3" element={<Home3 />} />
      </Routes>
    </>
  );
}

export default App;
