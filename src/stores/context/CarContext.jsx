import { createContext, useState ,useContext} from "react";





const CartContext=createContext()

/*created a function*/ 
const CartProvider=({children})=>{
    const [cartItems,setCartItems]=useState([])

    const addtoCart=(item)=>{
        setCartItems([...cartItems,item])
    }

    const removeFromCart=(item)=>{
        setCartItems(cartItems.filter((apple=>apple!==item)))
    }



return (
    <CartContext.Provider value={{cartItems,addtoCart,removeFromCart}}>
        {children}
    </CartContext.Provider>
)

}
export const useCart=()=>{
    return useContext(CartContext);
}

export default CartProvider;

/*as we are adding the selected products into cart, we used spread operator*/ 
/*the arguments of item are sending into cartItems*/ 
/*we are filtering the arguments of item into cartItems*/ 
/*we have to pass values to CartContext.Provider*/ 
/*for exporting we need to import useContext*/ 