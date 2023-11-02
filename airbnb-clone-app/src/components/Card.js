import React from "react"
import star from "./images/star.png"

export default function Card(props) {

     let badgeText
    if (props.item.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.item.location === "Online") {
        badgeText = "ONLINE"
    }

    return (
        <div className="card">
            {badgeText && <div className="card--badge">{badgeText}</div>}
            <img src={(props.item.id === 1) ? props.item.coverImg.katie 
                : (props.item.id === 2) ? props.item.coverImg.wedding 
                : (props.item.id === 3) ? props.item.coverImg.mountain : ""} 
                className="card--image" />
            <div className="card--stats">
                <img src={star} className="card--star" />
                <span>{props.item.stats.rating}</span>
                <span className="gray">({props.item.stats.reviewCount}) • </span>
                <span className="gray">{props.item.location}</span>
            </div>
            <p>{props.item.title}</p>
            <p><span className="bold">From ${props.item.price}</span> / person</p>
        </div>
    )
}