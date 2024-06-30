import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layouts from './Components/Layouts'
import HomePage from './Pages/HomePage'
import Login from './Pages/Login'
import ProductDetails from './Pages/ProductDetails'
import Products from './Pages/Products'
import Registerr from './Pages/Register'
import { MyCart } from './Pages/MyCart'

const MyRoute = () => {
    return (
        <>
            <Router>
                <Routes>
                    <Route path='' element={<Layouts />}>
                        <Route index element={<HomePage />} />
                        <Route path='login' element={<Login />} />
                        <Route path='signup' element={<Registerr />} />
                        <Route path='productDetail/:product_id' element={<ProductDetails />} />
                        <Route path='products' element={<Products />} />
                        <Route path='mycart' element={<MyCart />} />
                    </Route>
                </Routes>
            </Router>

        </>
    )
}

export default MyRoute