import React from 'react'
import './ListOfMovies.css'
function ListOfMovies() {
    const movies =[
        {
          name:"Pirates of the caribbean",
          language:["English ","Hindi ","Kannada"], 
          genre:["Action ","Adventure ","Thriller"],
          image:"https://assets1.ignimgs.com/2017/05/17/pirates5-1280-1495048322920_160w.jpg?width=480"
        },{
            name:"Pirates of the caribbean",
            language:["English ","Hindi ","Kannada"], 
            genre:["Action ","Adventure ","Thriller"],
            image:"https://assets1.ignimgs.com/2017/05/17/pirates5-1280-1495048322920_160w.jpg?width=480"
        },{
            name:"Pirates of the caribbean",
            language:["English ","Hindi ","Kannada"], 
            genre:["Action ","Adventure ","Thriller"],
            image:"https://assets1.ignimgs.com/2017/05/17/pirates5-1280-1495048322920_160w.jpg?width=480"
        },
      ]
  return (
    <div>
        {
          movies.length>0 ? movies.map((item)=>
            <div className='container'>
            <img src={item.image} alt="movies-img" /> 
            <div className='details'>
                <span className='name'>Movie: {item.name}</span>
                <span className='lang'>Language: {item.language}</span>
                <span className='lang'>Genre:{item.genre}</span>
                <button className='watch-trailer'>Watch Trailer</button>
            </div>
            </div>
                )
                :<h1>No Result Found</h1>
            }
    </div>
  )
}

export default ListOfMovies