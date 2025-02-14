import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './component/Header';
import Home from './component/Home';
import Footer from './component/Footer';
import { useState } from 'react';
import './App.css';
import Detail from './component/Detail';
import { AddToCartContext } from './component/Context';
import MyCart from './component/MyCart';
import LoginPage from './component/LoginPage';

function App() {

  const [addToCart, setAddToCart] = useState(0);
  const [myCart,setMyCart] = useState([]);
  const addToCartFun = (item) =>{
    let temp = [...myCart,item];
    console.log("Temp: "+temp)
    setMyCart(temp);
  }

  return (<>
    {/* <MyCart.Provider value={{myCart,setMyCart}}> */}
    <AddToCartContext.Provider value={{addToCart,setAddToCart}}>
      <Router>
        <Routes>
            <Route path='/login' element={<LoginPage/>}/>
            <Route path='/' element={<Header/>}>
            <Route index element={<Home purchaseItem = {addToCartFun}/>} />
            <Route path='/detail/:id' element={<Detail />} />
            <Route path='/myCart' element={<MyCart purchaseItem = {myCart}/>}/>
            </Route>
        </Routes>
        <Footer />
      </Router>
      </AddToCartContext.Provider>
    {/* </MyCart.Provider> */}
    </>
  );
}

export default App;
