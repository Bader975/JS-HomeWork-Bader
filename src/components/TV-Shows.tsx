import React from 'react'
interface TvShowsprops{
    title?: string,
    image?: string,
    showdate?:string,
   rate?:number,
   available?:boolean,
    
    
    }


function TV_Shows(props:TvShowsprops) {
  return (
    <div className="tv_shows">
    <div className="card">
        <h3>{props.title}</h3>
        <hr></hr>
        <img src={props.image} alt="" ></img>
        <hr></hr>
        <p>{props.showdate}</p>
        <p>{props.rate}</p>
        <p>{props.available?"Available" :"coming soon "} <i className="fa-solid fa-video"></i></p>  
        <button>Watch this TV-Show</button>
        
       </div>
   

    </div>
  )
}

export default TV_Shows