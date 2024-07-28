import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import styled from 'styled-components';
import { CartContext } from '../contexts/cartContext';

const CategoryProducts = ({ id, title, image, specs, features, price, stock }) => {
    const navigate = useNavigate();
    const cartContext = useContext(CartContext);
    const { addProduct } = cartContext;
    return (

        <ProductInfoArticle>
            <CategoryProductTitle>
                <Link className='link' to={`/products/${id}`}>{title}</Link>
            </CategoryProductTitle>
            <ProductInfoFirgure >
                <CategoryProductImageContainer>
                    <CategoryProductImage src={`/assets/${image}`} alt={title} />
                </CategoryProductImageContainer>
            </ProductInfoFirgure>
            <ProductInfoAside>
                <CategoryProductInfoDimensions>
                    <CategoryProductInfoH4>Dimensions</CategoryProductInfoH4>
                    <CategoryProductInfoLabel>
                        {specs?.dimensions}
                    </CategoryProductInfoLabel>
                </CategoryProductInfoDimensions>
                {specs?.capacity &&
                    <CategoryProductInfoCapacity>
                        <CategoryProductInfoH4>Capacity</CategoryProductInfoH4>
                        <CategoryProductInfoLabel>{specs?.capacity}</CategoryProductInfoLabel>
                    </CategoryProductInfoCapacity>
                }
                <CategoryProductInfoFeatures>
                    <CategoryProductInfoH4>Features</CategoryProductInfoH4>
                    <ul>
                        {features?.map((f, i) =>
                            <li key={`feature${i}`}>{f}</li>
                        )}
                    </ul>
                </CategoryProductInfoFeatures>
            </ProductInfoAside>
            <ProductInfoAside>
                <CatrgoryProductInfoFinancePrice>
                    &pound;{price}
                </CatrgoryProductInfoFinancePrice>
                <CategoryProductInfoFinanceStock>
                    <CategoryFinanceInfoLabel>
                        Stock level: {stock}<br />
                        Free delivery
                    </CategoryFinanceInfoLabel>
                </CategoryProductInfoFinanceStock>
                <CategoryProductAction>
                    <CategoryProductActionButton onClick={() => navigate(`/products/${id}`)}>View Product</CategoryProductActionButton>
                    <CategoryProductActionButton onClick={() => addProduct({ id, title, price })}>Add to basket</CategoryProductActionButton>
                </CategoryProductAction>
            </ProductInfoAside>
        </ProductInfoArticle >

    )
}

export default CategoryProducts;

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
  font-weight: bold;
  padding-top: 10px;
`;

const CategoryProductInfoFeatures = styled.div`

`;

const CategoryProductAction = styled.div`
  display: flex;
  flex-direction: column;
`;

const CategoryProductActionButton = styled.button`
 width: 160px;
  height: 30px;
  border-radius: 10px;
  margin-top: 20px;
  background-color: lightgray;
  border: solid 1px slategrey;
  font-weight: bold;
`;

const CategoryFinanceInfoLabel = styled.label`
font-size:22px

`;