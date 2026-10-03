import { useState ,createContext } from "react";

export const CartContext = createContext({
    cart: [
       {
         productId: '',
         quantity: 1
       } 
    ],
    addToCart: () => {}
});

export function CartProvider({children}: any) {

    const [cart, setCart] = useState([{
        productId: '',
        quantity: 1
    }]);

    function addToCart() {
        if(cart) {
            console.log('Cart works');
        }
    }

    return (
          <CartContext.Provider value={{cart, addToCart}}>
            {children}
          </CartContext.Provider>
    );
}