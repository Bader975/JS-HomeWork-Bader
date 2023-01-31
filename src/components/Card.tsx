import React from 'react' 
  interface Card{
  title?: string;
  text?: string;
  image?: string;


  }


function Card(props:Card) {
  return (
    <div className="card">
        <h1>{props.title}</h1>
        <img src={props.image} alt="" width="100"></img>
        <p>{props.text}</p>
        <button>For more information</button>
        
       </div>
  )
}

export default Card;