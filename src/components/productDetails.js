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
                <CategoryProductInfoFeatures>
                    <CategoryProductInfoH4>Features</CategoryProductInfoH4>
                    <ul>
                        {product.data.features?.map((f, i) =>
                            <li key={`feature${i}`}>{f}</li>
                        )}
                    </ul>
                </CategoryProductInfoFeatures>
            </ProductInfoAside>
            <ProductInfoAside>
                <CatrgoryProductInfoFinancePrice>
                    &pound;{product.data.price}
                </CatrgoryProductInfoFinancePrice>
                <CategoryProductInfoFinanceStock>
                    <CategoryFinaceInfoLabel>
                        Stock level: {product.data.stock}<br />
                        Free delivery
                    </CategoryFinaceInfoLabel>
                </CategoryProductInfoFinanceStock>
                <CategoryProductAction>
                    <CategoryProductActionButton>Add to basket</CategoryProductActionButton>
                </CategoryProductAction>
            </ProductInfoAside>
            <CategoryProductDescription>
                {product.data?.description}
            </CategoryProductDescription>
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
  font-weight: bold;
  padding-top: 10px;
`;

const CategoryProductInfoFeatures = styled.div`

`;

const CategoryProductDescription = styled.div`
grid-column: 1 / span 3;
padding-left:10px;
padding-right:10px;
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
const CategoryFinaceInfoLabel = styled.label`
font-size:22px;
`;