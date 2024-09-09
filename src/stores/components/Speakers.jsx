import React from 'react'
import { speakerData } from '../data/speaker'

const Speakers = () => {
  const firstFiveImages=speakerData.slice(0,5)
  return (
    /*the contents of div are wrapped inside a fragment<>.It acts like a div*/
    <>
    <div className="proTitle">
      <h2>Speakers</h2>
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

export default Speakers
