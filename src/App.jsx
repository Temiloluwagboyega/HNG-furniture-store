import Navbar from "./Components/Navbar/Navbar";
import Hero from './Components/Hero/Hero'
import Shop from './Pages/Shop'
import {Routes,Route } from "react-router-dom";
import Home from './Pages/Shop'
import Cart from './Pages/Cart'
import Product from './Pages/Productdetail'
import Checkout from './Pages/Checkout'
import Footer from './Components/footer/footer'
// import { ShopContextProvider } from "./context/shop-context";
function App(){
    return(
        <div > 
           {/* <ShopContextProvider> */}
           <Navbar/>
            <Routes> 
                <Route path='/' element={<Home/>} />
                <Route path='/cart' element={<Cart/>} />
                <Route path='/product=1' element={<Product/>} />
                <Route path='/checkout' element={<Checkout/>} />
            </Routes>
            <Footer/>
           {/* </ShopContextProvider> */}
        </div>
    )
}

export default App;