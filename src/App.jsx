import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Menu } from "./components/Menu/Menu";
import { Home } from "./pages/Home/Home";
import { Blog } from "./pages/Blog/Blog";
import { Contato } from "./pages/Contato/Contato";


function App() {
  return (
    <div>
      <Menu />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contato" element={<Contato />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;