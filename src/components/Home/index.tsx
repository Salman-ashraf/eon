import { useNavigate } from "react-router";
import Header from "../Header/Header";

// Builder Public API Key set in .env file

const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <Header />
    </>
  );
};

export default Home;
