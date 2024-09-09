import React from 'react'
import { furnitureData } from '../data/furniture'

const Furniture = () => {
  const firstFiveImages=furnitureData.slice(0,5)
  return (
    /*the contents of div are wrapped inside a fragment<>.It acts like a div*/
    <>
    <div className="proTitle">
      <h2>Furniture</h2>
    </div>
    <div className="proSection">
      {
        firstFiveImages.map((item)=>{
            return(
                <div className="imgBox">
                    <img className="proImage" src={item.image}></img>
                </div>
            )

        })
      }
    </div></>
  )
}

export default Furniture

