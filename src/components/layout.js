import React from 'react'
import { Outlet, Link } from 'react-router-dom';
import { CartIcon, HomeIcon } from './icons';

const Layout = ({ categories }) => {
    const renderCategories = () => {

        return categories.data.map(c => (
            <li className='categoryList' key={c.id}>
                <Link to={`/categories/${c.id}`} className='link'>{c.title}</Link>
            </li>
        ));
    }
    return (
        <React.Fragment>
            <div className="App">
                <header className='header'>
                    <div id='homeIcon'>
                        <Link to='/'>
                            <HomeIcon width={40} />
                        </Link>
                    </div>
                    <div id='header'>
                        My Shop
                    </div>
                    <div id='cartIcon'>
                        <Link to='/basket'>
                            <CartIcon width={40} />
                        </Link>
                    </div>
                </header>
                <main className='main'>
                    <nav className='navBar'>
                        {categories.errorMessage && <div>Error: {categories.errorMessage}</div>}
                        <ul>
                            {categories.data && renderCategories()}
                        </ul>
                    </nav>
                    <div className='mainArea'>
                        <Outlet />
                    </div>
                </main>
                <footer className='footer'>
                    <Link to='/' >Home</Link> | <Link to={'/basket'}>Basket</Link>
                </footer>
            </div>
        </React.Fragment>
    )
}

export default Layout