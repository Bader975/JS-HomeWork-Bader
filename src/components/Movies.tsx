import React from 'react'
interface Moviesprops{
    title?: string,
    image?: string,
    showdate?:string,
   rate?:number,
   available?:boolean,
    
    
    }


function Movies(props:Moviesprops) {
  return (
    <div className="movies">
         <div className="card">
        <h3>{props.title}</h3>
        <hr></hr>
        <img src={props.image} alt=""></img>
        <hr></hr>
        <p>{props.showdate}</p>
        <p>{props.rate} <i className="fa-sharp fa-solid fa-star"></i></p>
        <p>{props.available?"Available " :"coming soon "}  <i className="fa-solid fa-video"></i></p>
  
        <button>Watch this Movie</button>   
        
       </div>

    </div>
  )
}

export default Movies