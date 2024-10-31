import BuilderPage from "./builder-page";
import { Route, Routes } from "react-router";
import Home from "./components/Home";

function App() {
  return (
    <>
      <Routes>
        <Route path="/builder-demo" element={<BuilderPage />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
