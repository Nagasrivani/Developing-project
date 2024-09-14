import React, { useEffect } from 'react';
import { mobileData } from '../stores/data/mobiles'
import { useParams , useNavigate } from 'react-router-dom'// Import hooks for accessing URL parameters and programmatic navigation.
import { useCart } from '../stores/context/CarContext';

const MobileSingle = () => {
  //get product id from url parameters using the useParams hook
  const {id} = useParams();/*added the useParams hook to extract the id parameter from the URL*/ 
  const navigate = useNavigate(); //use navigate for redirection

  /*destructuring and our hook name is now useCart()*/
  const {addtoCart, cartItems}=useCart()
  
  const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));//retrieve user from localStorage
  const user = loggedInUser ? loggedInUser.user : null; // Safely access user object

  /*filter the mobileData array based on the selected id*/ 
  //find the product in the mobileData array that matches the selected ID
  const product= mobileData.find((item) => item.id === id);
  console.log(id)/*whatever we given in id, that will display in the console,eg */
  console.log("URL ID:", id); // Check the ID from the URL
  console.log("Available IDs:", mobileData.map(item => item.id)); // Check all available IDs

  
  useEffect(() => {
    const storedProduct = localStorage.getItem('productToAdd');
    const redirectPath = localStorage.getItem('redirectPath');
    if (storedProduct && user) {
        // If there's a product in localStorage, add it to the cart and clear storage
        addtoCart(JSON.parse(storedProduct));
        localStorage.removeItem('productToAdd');
        localStorage.removeItem('redirectPath');
        if (redirectPath) {
          navigate(redirectPath); // Redirect to the stored path after login
        }
    }
}, [user, addtoCart, navigate]);

//function to handle adding a product to the cart
const handleAddToCart = () => {
  if (user)
  {
    // User is logged in; add the product to the cart
    addtoCart(product);
  }
  else
  {
    // User is not logged in; redirect to the login page with the current path
    //navigate('/login', { state: { from: location.pathname, product} });

    // If not logged in, store product in localStorage and redirect to login
    localStorage.setItem('productToAdd', JSON.stringify(product));
    localStorage.setItem('redirectPath', `/mobiles/${id}`); // Store the path to redirect after login
    navigate('/login');
  }
};
  if (!product) return <div>Product not found</div>; // Show message if product not found
  return (
    <>
    
    <div className="ind-page">
      <div className="ind-image">
        <img src={product.image}/>
      </div>

      <div className="ind-details space">
        <div className="ind-company space">
          <h2>{product.company}</h2>
        </div>
        <div className="ind-model space">
          <h3>{product.model}</h3>
        </div>

        <div className="ind-price space">
          <h2>{product.price}</h2>
        </div>

        <div className="ind-desc space">
          <p>{product.description}</p>
        </div>
        <button onClick={handleAddToCart}>Add to Cart</button>
      </div>
    </div></>
  )
}

export default MobileSingle
/*to get the end-point of the id, we used useParams() hook*/ 
/*if id is passed as {id}, then it is destructured*/ 
/*we are finding id of the mobileData using find method in js*/ 
/*find is a call back func*/ 
/*if item.id===id then we are assigning id to {id} of useParams() hook*/ 
/*http://localhost:5173/mobiles/:123, we have given 123 in place of id,,,in the console,:123*/ 
/*display leftside=image, rightside=details*/ 



