import React from "react";
import img2 from "../img2.jpg"

export default function Footer(props){
    let cardBadge;
    if(props.openSpots === 0){
        cardBadge = "Sold Out"
    }
    else if(props.location === "Online"){
        cardBadge = "Online"
    }

    return(
    <div className="card">
            {cardBadge && <div className="card--badge">{cardBadge}</div>}
            <img src={props.img} className="card--image"/>
                <div className="card--stats" >
                <img src={img2} className="card--star" alt="img"/>
                <span>{props.rating}</span>
                <span className="gray">({props.reviewCount}) • </span>
                <span className="gray">{props.location}</span>
            </div>
            <p className="footP1">{props.title}</p>
  
            <p  className="footP2"><span className="bold">From ${props.price}</span> / person</p>
      
    </div>
          
    )
}
