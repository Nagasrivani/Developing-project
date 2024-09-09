import React from 'react'
import { acData } from '../data/ac'

const Ac = () => {

    /*showing only first 5 images in a row*/
    const firstFiveImages=acData.slice(0,5)/*starting from 0, end at 5*/
  return (
    /*the contents of div are wrapped inside a fragment<>.It acts like a div*/
    <>
    <div className="proTitle">
      <h2>Ac</h2>
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

export default Ac
