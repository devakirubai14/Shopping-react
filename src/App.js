import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Homepage from './pages/Homepage';
import Loginpage from './pages/LoginPage';
import ProductDetails from './pages/ProductDetails';
import './App.css';
import { CartProvider } from './context/CartContext';
import CartPage from './pages/CartPage';

function App() {
  return (
    <CartProvider>
      <Router>
        <Routes>
          <Route path='/' element={<Loginpage />}/>
          <Route path='/home' element={<Homepage />}/>
          <Route path='/home/:productId' element={<ProductDetails />}/>
          <Route path='/cart' element={<CartPage />} />
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;