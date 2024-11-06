import BuilderPage from "./builder-page";
import { Route, Routes } from "react-router";
import Home from "./Layout/Home";
import Editor from "./components/Editor";
import Home2 from "./Layout/Home2";
import Home3 from "./Layout/Home3";
import Home4 from "./Layout/Home4";
import Home3Ai from "./Layout/Home3/Home3Ai";
import Home5Component from "./Layout/Home5/Home5Component";
import Home5 from "./Layout/Home5";
import Home5Ai from "./Layout/Home5/Home5Ai";

import Home6Ai from "./Layout/Home6/Home6Ai";
import Home6 from "./Layout/Home6";
import Home6Component from "./Layout/Home6/Home6Component";

import Home7Ai from "./Layout/Home7/Home7Ai";
import Home7 from "./Layout/Home7";
import Home7Component from "./Layout/Home7/Home7Component";

function App() {
  return (
    <>
      <Routes>
        <Route path="/builder-demo" element={<BuilderPage />} />
        <Route path="/" element={<Editor />} />
        <Route path="/page" element={<Home />} />
        <Route path="/page/ai" element={<Home2 />} />

        <Route path="/page2" element={<Home4 />} />
        <Route path="/page2/ai" element={<Home3Ai />} />
        <Route path="/page2/component" element={<Home3 />} />

        <Route path="/page3" element={<Home5 />} />
        <Route path="/page3/ai" element={<Home5Ai />} />
        <Route path="/page3/component" element={<Home5Component />} />

        <Route path="/page4" element={<Home6 />} />
        <Route path="/page4/ai" element={<Home6Ai />} />
        <Route path="/page4/component" element={<Home6Component />} />

        <Route path="/page5" element={<Home7 />} />
        <Route path="/page5/ai" element={<Home7Ai />} />
        <Route path="/page5/component" element={<Home7Component />} />
      </Routes>
    </>
  );
}

export default App;
