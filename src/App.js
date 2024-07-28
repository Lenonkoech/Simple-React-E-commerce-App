import './App.css';
import React, { useEffect, useState } from 'react';
import { getCategories, } from './fetcher';
import ProductDetails from './components/productDetails';
import Basket from './components/basket';
import Checkout from './components/checkout';
import {
    BrowserRouter,
    Route,
    Routes
} from 'react-router-dom';
import Categories from './components/Categories';
import Layout from './components/layout';
import Home from './components/home';

const App = () => {
    const [categories, setCategories] = useState({ errorMessage: '', data: [] });

    useEffect(() => {
        const fetchData = async () => {
            const responseObject = await getCategories();
            setCategories(responseObject);
        }
        fetchData();
    }, []);


    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Layout categories={categories} />} >
                    <Route index element={<Home />} />
                    <Route path='basket' element={<Basket />} />
                    <Route path='checkout' element={<Checkout />} />
                    <Route path='products/:productid' element={<ProductDetails />} />
                    <Route path='categories/:categoryId' element={<Categories />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
