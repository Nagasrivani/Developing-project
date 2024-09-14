import React,{useState} from 'react'
import { computerData } from '../data/computers'

import { Link } from 'react-router-dom'



const ComputerPage = () => {
    
  /*to filter the product based on company, we used useState() and passed an empty array into it*/ 
  const [selectedProduct,setSelectedProduct]=useState([])

  /*created a function */ 
  const companyHandler=(mango)=>{
    if(selectedProduct.includes(mango))
    {
      setSelectedProduct(selectedProduct.filter(item=>item!==mango))
    }
    else
    {
      setSelectedProduct([...selectedProduct,mango])
    }
  }
  /*not only our selectedProduct company should display, whatever we are selecting company, all should display*/ 
  /*that's why we used spread operator*/ 
    
  const filteredProduct=selectedProduct.length===0?
  computerData:computerData.filter((orange)=>selectedProduct.includes(orange.company))


  return (
    <>
   
    
    <div className="fullpage">
      <div className="pro-selected">
        {computerData.map((phone)=>{
          return(
            <div>
              <label>
                <input type="checkbox"
                checked={selectedProduct.includes(phone.company)}
                onChange={()=>companyHandler(phone.company)}
                />
                {phone.company}
              </label>
            </div>
          )
        })}
      </div>
      <div className='pageSection'>
          {filteredProduct.map((item)=>{
              return(
                  <div>
                      <Link to={`/computers/${item.id}`}>
                          <div className='pageImg'>
                              <img src={item.image}></img>
                          </div>
                      </Link>
                      <div className="proModel">
                          {item.company},{item.model}
                      </div>
                      
                  </div>
              )
          })}
        
      </div>
    </div>

    
    </>
  )
}
/*in these only all images are there, when we click any images, routing should happen*/ 
/*so link should be applied to this image*/ 
/*Link to {`/mobiles/:id`},remove id,we are getting id from item


/*if selectedProducted is checked i.e tick mark,dynamic ga we are pushing values into selectedpProduct*/ 
/*based on its company we are filtering, so include phone.comapny*/ 

/*we are filtering selectedProduct and assigned to setSelectedProduct*/ 
/*filter also takes call back function*/ 

/*as company names are getting phone, so used {phone.company*/

export default ComputerPage
