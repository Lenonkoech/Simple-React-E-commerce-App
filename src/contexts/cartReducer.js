export const CartReducer = (state, action) => {
    let index = -1;
    if (action.payload)
        index = state.cartItems.findIndex(x => x.id === action.payload.id);
    switch (action.type) {
        case 'ADD':
        case 'INCQTY':
            if (index === -1) {
                state.cartItems.push({ ...action.payload, quantity: 1 });

            }
            else {
                state.cartItems[index].quantity++;
            }
            break;

        case 'REMOVE':
            if (index > -1) {
                state.cartItems.splice(index, 1);
            }
            break;
        case 'DECQTY':
            if (index > -1) {
                state.cartItems.quantity--;
            }
            break;
        case 'CLEAR':
            if (index > -1) {
                state.cartItems = [];
            }
            break;
        default:
            break;
    }
    return state;

}