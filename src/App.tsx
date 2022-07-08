import { BrowserRouter, Route, Routes } from "react-router-dom";
import Contato from "./pages/Contato/Contato";
import Home from "./pages/Home/Home";
import Main from "./pages/Main";
import Portfolio from "./pages/Portfolio/Portfolio";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />}>
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="contato" element={<Contato />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
