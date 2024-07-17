import './App.css';
import React, { useEffect, useState } from 'react';
import Categories from './components/Categories';
import { getCategories, getProducts } from './fetcher';
import CategoryProducts from './components/categoryProducts';

const App = () => {

    const [categories, setCategories] = useState({ errorMessage: '', data: [] });
    const [products, setProducts] = useState({ errorMessage: '', data: [] });

    useEffect(() => {
        const fetchData = async () => {
            const responseObject = await getCategories();
            setCategories(responseObject);
        }
        fetchData();
    }, []);

    const handleCategoryClick = id => {
        const fetchProducts = async () => {
            const responseObject = await getProducts(id);
            setProducts(responseObject);
        }
        fetchProducts();
    }

    const renderCategories = () => {

        return categories.data.map(c => (
            <Categories key={c.id} id={c.id} title={c.title}
                onCategoryClick={() => handleCategoryClick(c.id)} />));
    }

    const renderProducts = () => {
        return products.data.map(p => (
            <CategoryProducts {...p} >{p.title}</CategoryProducts>
        )
        )
    }

    return (
        <React.Fragment>
            <div className="App">
                <header className='header'>MY shop</header>
                <main className='main'>
                    <nav className='navBar'>
                        {categories.errorMessage && <div>Error: {categories.errorMessage}</div>}
                        {categories.data && renderCategories()}
                    </nav>
                    <div className='mainArea'>
                        <h4>Products</h4>
                        {products.errorMessage && <div>Error: {products.errorMessage}</div>}
                        {
                            products.data && renderProducts()
                        }
                    </div>
                </main>
                <footer className='footer'>Footer</footer>
            </div>
        </React.Fragment>
    );
}

export default App;
