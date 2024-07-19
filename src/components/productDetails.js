import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getProductById } from '../fetcher';
const ProductDetails = () => {
    const { productid } = useParams();
    const [product, setProduct] = useState({ errorMessage: '', data: [] });
    useEffect(() => {
        const fetchData = async () => {
            const responseObject = await getProductById(productid);
            setProduct(responseObject);
        }
        fetchData();
    }, [productid])
    return (
        <article>
            <div className='category-product-title'>
                {product.data.title}
            </div>
            <figure >
                <div className='category-product-image-container'>
                    <img src={`/assets/${product.data.image}`} alt={product.data.title} />
                </div>
            </figure>
            <aside>
                <div className='category-product-info dimensions'>
                    <h4>Dimensions</h4>
                    <label>{product.data.specs?.dimensions}</label>
                </div>
                {product.data.specs?.capacity &&
                    <div className='category-product-info capacity'>
                        <h4>Capacity</h4>
                        <label>{product.data.specs?.capacity}</label>
                    </div>
                }
                <div className='category-product-info-features'>
                    <h4>Features</h4>
                    <ul>
                        {product.data.features?.map((f, i) =>
                            <li key={`feature${i}`}>{f}</li>
                        )}
                    </ul>
                </div>
            </aside>
            <aside className='category-product-finance'>
                <div className='category-product-finance-price'>
                    &pound;{product.data.price}
                </div>
                <div className='category-product-finance-stock'>
                    <label>
                        Stock level: {product.data.stock}<br />
                        Free delivery
                    </label>
                </div>
                <div className='category-product-action'>
                    <button>Add to basket</button>
                </div>
            </aside>
            <div className='category-product-description'>
                {product.data?.description}
            </div>
        </article>

    )
}

export default ProductDetails