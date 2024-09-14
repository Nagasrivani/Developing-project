import { createContext, useState ,useContext} from "react";


//create cart context
const CartContext=createContext()

/*created a function*/ 
//cart provider component
const CartProvider=({children})=>{
    const [cartItems,setCartItems]=useState(() => {
        // Retrieve cart items from localStorage on initial render
        const savedCartItems = localStorage.getItem('cartItems');
        return savedCartItems ? JSON.parse(savedCartItems) : [];
    });
    const [user, setUser] = useState(null); //add user state to manage login status

    //function to add an item to cart
    const addtoCart=(item)=>{
      // Avoid adding duplicate items to the cart
      const isItemInCart = cartItems.find((cartItem) => cartItem.id === item.id);  
      if (!isItemInCart) 
        {
            const updatedCartItems = [...cartItems, item];
            setCartItems(updatedCartItems);
            localStorage.setItem('cartItems', JSON.stringify(updatedCartItems)); // Update localStorage
        } 
        else 
        {
            alert("Item is already in the cart.");
        }
    }

     // Function to remove an item from the cart
     const removeFromCart = (item) => {
        const updatedCartItems = cartItems.filter((cartItem) => cartItem.id !== item.id);
        setCartItems(updatedCartItems);
        localStorage.setItem('cartItems', JSON.stringify(updatedCartItems)); // Update localStorage
    };



return (
    <CartContext.Provider value={{cartItems,addtoCart,removeFromCart,user,setUser}}>
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