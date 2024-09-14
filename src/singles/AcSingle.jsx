import React from 'react'
import { acData } from '../stores/data/ac'
import { useParams } from 'react-router-dom'

import { useCart } from '../stores/context/CarContext';

const AcSingle = () => {
  const {id}=useParams();/*added the useParams hook to extract the id parameter from the URL*/ 

  /*destructuring and our hook name is now useCart()*/
  const {addtoCart, cartItems}=useCart()

  /*filter the mobileData array based on the selected id*/ 
  const product=acData.find((item)=>item.id===id)
  console.log(id)/*whatever we given in id, that will display in the console,eg */

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
        <button onClick={()=>addtoCart(product)}>Add to Cart</button>
      </div>
    </div></>
  )
}

export default AcSingle
/*to get the end-point of the id, we used useParams() hook*/ 
/*if id is passed as {id}, then it is destructured*/ 
/*we are finding id of the mobileData using find method in js*/ 
/*find is a call back func*/ 
/*if item.id===id then we are assigning id to {id} of useParams() hook*/ 
/*http://localhost:5173/mobiles/:123, we have given 123 in place of id,,,in the console,:123*/ 
/*display leftside=image, rightside=details*/ 



