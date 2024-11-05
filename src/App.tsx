import BuilderPage from "./builder-page";
import { Route, Routes } from "react-router";
import Home from "./Layout/Home";
import Editor from "./components/Editor";
import Home2 from "./Layout/Home2";
import Home3 from "./Layout/Home3";
import Home4 from "./Layout/Home4";

function App() {
  return (
    <>
      <Routes>
        <Route path="/builder-demo" element={<BuilderPage />} />
        <Route path="/" element={<Editor />} />
        <Route path="/page" element={<Home />} />
        <Route path="/page/ai" element={<Home2 />} />
        <Route path="/page2/component" element={<Home3 />} />
        <Route path="/page2" element={<Home4 />} />
      </Routes>
    </>
  );
}

export default App;
