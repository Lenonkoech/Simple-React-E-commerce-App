import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const CategoryProducts = ({ id, title, image, specs, features, price, stock }) => {
    const navigate = useNavigate();
    return (
        <article>
            <div className='category-product-title'>
                <Link to={`products/${id}`}>{title}</Link>
            </div>
            <figure >
                <div className='category-product-image-container'>
                    <img src={`assets/${image}`} alt={title} />
                </div>
            </figure>
            <aside>
                <div className='category-product-info dimensions'>
                    <h4>Dimensions</h4>
                    <label>{specs.dimensions}</label>
                </div>
                {specs.capacity &&
                    <div className='category-product-info capacity'>
                        <h4>Capacity</h4>
                        <label>{specs.capacity}</label>
                    </div>
                }
                <div className='category-product-info-features'>
                    <h4>Features</h4>
                    <ul>
                        {features?.map((f, i) =>
                            <li key={`feature${i}`}>{f}</li>
                        )}
                    </ul>
                </div>
            </aside>
            <aside className='category-product-finance'>
                <div className='category-product-finance-price'>
                    &pound;{price}
                </div>
                <div className='category-product-finance-stock'>
                    <label>
                        Stock level: {stock}<br />
                        Free delivery
                    </label>
                </div>
                <div className='category-product-action'>
                    <button onClick={() => navigate(`products/${id}`)}>View product</button>
                    <button>Add to basket</button>
                </div>
            </aside>
        </article>

    )
}

export default CategoryProducts