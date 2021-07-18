import React from 'react'

const GiphyList = ({gifs}) => {
  return (
  <div className="result">
    <div className="list">
      {
        gifs.map((gif)=>{
          return (
            <div className="item">
              <img src={gif.images.fixed_height.url}/>  
            </div>
          )
        })
      }
    </div>
  </div>
  )
}

export default GiphyList
