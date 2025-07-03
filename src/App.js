import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Homepage from './pages/Homepage';
import Loginpage from './pages/LoginPage';
import ProductDetails from './pages/ProductDetails';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Loginpage />}/>
        <Route path='/home' element={<Homepage />}/>
        <Route path='/home/:productId' element={<ProductDetails />}/>
      </Routes>
    </Router>
  );
}

export default App;
