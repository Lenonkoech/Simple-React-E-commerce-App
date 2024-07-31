import React from 'react'
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
const Checkout = () => {
    const navigate = useNavigate();
    return (

        <CheckoutContainer>
            {/* Row 1 */}
            <CheckoutTitle>Shopping Checkout</CheckoutTitle>

            {/* Row 4 */}
            <CheckoutHeader>
                <h4>Your Details</h4>
            </CheckoutHeader>

            {/* Row 5 */}
            <CheckoutHeaderLine />

            {/* Row 6 */}
            <CheckoutTable>
                <CheckoutFormLabel>Name</CheckoutFormLabel>
                <CheckoutInput
                    type="text"
                    name="name"
                    placeholder="Enter name"
                />
                <CheckoutFormLabel>Email</CheckoutFormLabel>
                <CheckoutInput
                    type="text"
                    name="email"
                    placeholder="Enter email"
                />
            </CheckoutTable>

            {/* Row 7 */}
            <CheckoutHeader>
                <h4>Address Details</h4>
            </CheckoutHeader>

            {/* Row 8 */}
            <CheckoutHeaderLine />

            {/* Row 9 */}
            <CheckoutTable>
                <CheckoutFormLabel>Copy to shipping</CheckoutFormLabel>
                <CheckoutFormCheckbox type="checkbox" />

                <CheckoutFormLabel>Billing Address</CheckoutFormLabel>

                <CheckoutAddress>
                    <input
                        type="text"
                        name="billingAddress1"
                    />
                    <input type="text" name="billingAddress2" />
                    <input type="text" name="billingCity" />
                </CheckoutAddress>

                <CheckoutFormLabel>Shipping Address</CheckoutFormLabel>

                <CheckoutAddress>
                    <CheckoutInput
                        type="text"
                        name="shippingAddress1"

                        placeholder="Enter first address line"
                    />
                    <input type="text" name="shippingAddress2" />
                    <input type="text" name="shippingCity" />
                </CheckoutAddress>
            </CheckoutTable>

            <CancelButton onClick={() => navigate("/basket")}>
                Cancel
            </CancelButton>

            <CheckoutButton>
                Confirm Order
            </CheckoutButton>
        </CheckoutContainer>
    )
}

export default Checkout;

const CheckoutContainer = styled.div`
    display: grid;
    padding: 20px;
    grid-template-rows: 0.25fr 1fr 0.25fr 0.25fr 0.25fr 0.5fr;
    grid-template-columns: 0.1fr 1fr 0.1fr;
`;
const CheckoutTable = styled.div`
    grid-column: 1 / span 3;

    display: grid;
    grid-template-rows: 0.25fr 0.25fr 0.25fr 0.25fr;
    grid-template-columns: 0.1fr 0.4fr 0.1fr 0.4fr;
    column-gap: 20px;
    padding-left: 10px;
`;

const CheckoutHeader = styled.div`
    grid-column: 1 / span 3;
    padding-top: 20px;
`;
const CheckoutHeaderLine = styled.hr`
    grid-column: 1 / span 3;
    margin-bottom: 20px;
    border: 1px solid gray;
`;
const CheckoutTitle = styled.h2`
    grid-column: 1 / span 2;
    padding-bottom: 20px;
`;

const CheckoutAddress = styled.div`
    display: grid;

    grid-template-rows: 0.25fr 0.25fr 0.25fr 0.25fr;
    grid-template-columns: 1fr;
    grid-row-gap: 10px;
`;

const CheckoutFormLabel = styled.label`
    justify-self: end;
`;

const CheckoutInput = styled.input`
    border-width: 1px;
    border-style: solid;

    ${(props) =>
        props.invalid &&
        `
        border-color: red;
        border-width: 3px;
    `}
`;

const CheckoutFormCheckbox = styled.input`
    grid-column: 2 / span 3;
    justify-self: start;
    margin-bottom: 20px;
`;

const CheckoutButton = styled.button`
    border-radius: 8px;
    height: 40px;
    grid-column: 3;
`;

const CancelButton = styled.button`
    border-radius: 8px;
    height: 40px;
    grid-column: 1;
`;
