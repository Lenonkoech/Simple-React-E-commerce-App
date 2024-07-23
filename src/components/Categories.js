import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { getProducts } from '../fetcher';
import CategoryProducts from './categoryProducts';

const Categories = ({ id, title, onCategoryClick }) => {

    const [products, setProducts] = useState({ errorMessage: '', data: [] });
    const { categoryId } = useParams();

    useEffect(() => {
        const fetchData = async () => {
            const responseObject = await getProducts(categoryId);
            setProducts(responseObject);
        }
        fetchData();
    }, [categoryId]);

    const renderProducts = () => {
        return products.data.map(p => (
            <CategoryProducts key={p.id} {...p}>{p.title}</CategoryProducts>
        )
        )
    }

    return (
        <div>
            {products.errorMessage && <div>Error: {products.errorMessage}</div>}
            {
                products.data && renderProducts()
            }
        </div>
    );
}

export default Categories