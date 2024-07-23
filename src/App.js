import './App.css';
import React, { useEffect, useState } from 'react';
import { getCategories, } from './fetcher';
import { Link } from 'react-router-dom';

const App = () => {
    const [categories, setCategories] = useState({ errorMessage: '', data: [] });

    useEffect(() => {
        const fetchData = async () => {
            const responseObject = await getCategories();
            setCategories(responseObject);
        }
        fetchData();
    }, []);

    const renderCategories = () => {

        return categories.data.map(c => (
            <li className='categoryList' key={c.id}>
                <Link to={`categories/${c.id}`} className='link'>{c.title}</Link>
            </li>
        ));
    }

    return (
        <React.Fragment>
            <div className="App">
                <header className='header'>MY shop</header>
                <main className='main'>
                    <nav className='navBar'>
                        {categories.errorMessage && <div>Error: {categories.errorMessage}</div>}
                        <ul>
                            {categories.data && renderCategories()}
                        </ul>
                    </nav>
                    <div className='mainArea'>
                        {/* {products.errorMessage && <div>Error: {products.errorMessage}</div>}
                        {
                            products.data && renderProducts()
                        } */}
                    </div>
                </main>
                <footer className='footer'>Footer</footer>
            </div>
        </React.Fragment>
    );
}

export default App;
