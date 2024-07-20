import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getProductById } from '../fetcher';
import styled from 'styled-components';

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
        <ProductInfoArticle>
            <CategoryProductTitle>
                {product.data.title}
            </CategoryProductTitle>
            <ProductInfoFirgure >
                <CategoryProductImageContainer>
                    <CategoryProductImage src={`/assets/${product.data.image}`} alt={product.data.title} />
                </CategoryProductImageContainer>
            </ProductInfoFirgure>
            <ProductInfoAside>
                <CategoryProductInfoDimensions>
                    <CategoryProductInfoH4>Dimensions</CategoryProductInfoH4>
                    <CategoryProductInfoLabel>
                        {product.data.specs?.dimensions}
                    </CategoryProductInfoLabel>
                </CategoryProductInfoDimensions>
                {product.data.specs?.capacity &&
                    <CategoryProductInfoCapacity>
                        <CategoryProductInfoH4>Capacity</CategoryProductInfoH4>
                        <CategoryProductInfoLabel>{product.data.specs?.capacity}</CategoryProductInfoLabel>
                    </CategoryProductInfoCapacity>
                }
                <div className='category-product-info-features'>
                    <CategoryProductInfoH4>Features</CategoryProductInfoH4>
                    <ul>
                        {product.data.features?.map((f, i) =>
                            <li key={`feature${i}`}>{f}</li>
                        )}
                    </ul>
                </div>
            </ProductInfoAside>
            <ProductInfoAside className='category-product-finance'>
                <CatrgoryProductInfoFinancePrice>
                    &pound;{product.data.price}
                </CatrgoryProductInfoFinancePrice>
                <CategoryProductInfoFinanceStock>
                    <CategoryProductInfoLabel>
                        Stock level: {product.data.stock}<br />
                        Free delivery
                    </CategoryProductInfoLabel>
                </CategoryProductInfoFinanceStock>
                <div className='category-product-action'>
                    <button>Add to basket</button>
                </div>
            </ProductInfoAside>
            <div className='category-product-description'>
                {product.data?.description}
            </div>
        </ProductInfoArticle>

    )
}

export default ProductDetails

//Styled components
const ProductInfoArticle = styled.article`
  display: grid;
  grid-template-columns: 1fr 1fr 0.7fr;
  grid-template-rows: 0.25fr 1fr 0.25fr;
  column-gap: 20px;
`;

const CategoryProductTitle = styled.div`
  grid-column: 1 / span 3;
  color: darkslategray;
  font-weight: bold;
  font-size: 1.5em;
  padding-left: 10px;
`;

const ProductInfoFirgure = styled.figure`

`;
const CategoryProductImageContainer = styled.div`
 padding: 10px;
  width: 300px;
`;

const CategoryProductImage = styled.img`
 height: 250px;
  width: 300px;
  margin-right: auto;
  border-radius: 10px;
`;

const ProductInfoAside = styled.aside`

`;
const CategoryProductInfoDimensions = styled.div`
 display: flex;
 flex-direction: column;
`;

const CategoryProductInfoCapacity = styled.div`
 display: flex;
 flex-direction: column;
`;

const CategoryProductInfoLabel = styled.label`

`;
const CategoryProductInfoH4 = styled.h4`

`;

const CatrgoryProductInfoFinancePrice = styled.div`
 color: darkslategray;
  font-size: 2em;
  font-weight: bold;
  padding-top: 10px;
`;

const CategoryProductInfoFinanceStock = styled.div`
 color: darkslategray;
  font-size: 2em;
  font-weight: bold;
  padding-top: 10px;
`;

