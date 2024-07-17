import React from 'react'

const CategoryProducts = ({ title, image, specs, features, price, stock }) => {
    return (
        <article>
            <div className='category-product-title'>
                {title}
            </div>
            <firgure >
                <div className='category-product-image-container'>
                    <img src={`assets/${image}`} alt={title} />
                </div>
            </firgure>
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
                        {features?.map(f =>
                            <li>{f}</li>
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
                    <button>View product</button>
                    <button>Add to basket</button>
                </div>
            </aside>
        </article>

    )
}

export default CategoryProducts