
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom';
import Home from "./components/pages/Home";
import Product from "./components/pages/Product";
import Header from "./components/organism/Header";
import Contato from './components/pages/FaleConosco';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />

        <div style={{ paddingTop: 140, width: "100%", display: "block" }}>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/produto/:id" element={<Product />} />
            <Route path='/contato' element={<Contato />} />
          </Routes>
        </div>

      </BrowserRouter>
    </>
  );
}

export default App;
