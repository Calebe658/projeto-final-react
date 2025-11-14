
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
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/produto/:id" element={<Product />} />
          <Route path='/contato' element={<Contato />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
