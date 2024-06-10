
import './App.css';
import Navbar from './Componenets/Navbar/Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Shop from './Pages/shop';
import Cart from './Pages/Cart';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import LoginSignup from './Pages/LoginSignup';
import Popular from './Componenets/Popular/popular';
import Footer from './Componenets/Footer/Footer';
import men_banner from './Componenets/Assests/banner_mens.png'
import womens_banner from './Componenets/Assests/banner_women.png'
import kids_banner from './Componenets/Assests/banner_kids.png'
function App() {
  return (
    <div>
       <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Shop/>}/>
        <Route path='/mens' element={<ShopCategory banner={men_banner} category="men"/>}/>
        <Route path='/kids' element={<ShopCategory banner={kids_banner} category="kid"/>}/>
        <Route path='/womens' element={<ShopCategory banner={womens_banner} category="women"/>}/>
        <Route path='/product' element={<Product/>}>
          <Route path=':productId' element={<Product/>}/>
        </Route>
        <Route path='/Cart' element={<Cart/>}/>
        <Route path='/login' element={<LoginSignup/>}/>
        <Route path='/popular' element={<Popular/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
