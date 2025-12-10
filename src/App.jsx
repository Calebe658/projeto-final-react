
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom';
import Home from "./components/pages/Home";
import Product from "./components/pages/Product";
import Header from "./components/organism/Header";
import Carrinho from './components/pages/Carrinho';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />

        <div style={{ paddingTop: 140, width: "100%", display: "block" }}>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/produto/:id" element={<Product />} />
            <Route path='/carrinho' element={<Carrinho />} />
          </Routes>
        </div>

      </BrowserRouter>
    </>
  );
}

export default App;
