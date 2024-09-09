import React from 'react'
import { booksData } from '../data/books'

const Books = () => {
  const firstFiveImages=booksData.slice(0,5)
  return (
    /*the contents of div are wrapped inside a fragment<>.It acts like a div*/
    <>
    <div className="proTitle">
      <h2>Books</h2>
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

export default Books

