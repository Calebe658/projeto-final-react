
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./components/pages/Home";
import Product from "./components/pages/Product";
import Header from "./components/organism/Header";
import Carrinho from './components/pages/Carrinho';
import { CartProvider } from './contexts/CartContext'; 

const App = () => {
  return (
    <>
      <Router>
        <Header />

        <div style={{ paddingTop: 140, width: "100%", display: "block" }}>

        <CartProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/produto/:id" element={<Product />} />
            <Route path='/carrinho' element={<Carrinho />} />
          </Routes>
        </CartProvider>
        </div>
      </Router>
    </>
  );
}

export default App;
