import React from "react"
import personOne from "../images/katie-zaferes.png"
import star from "../images/star.png"

export default function Card(card_data) {
    let badgeText;
    const props=card_data.item;
    if (props.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.location === "Online") {
        badgeText = "ONLINE"
    }
    return (
        <div className="card">
            {badgeText && <div className="card--badge">{badgeText}</div>}
            <img src={props.image} className="card--image"/>
            <div className="card--stats">
                <img src={star} className="card--star"/>
                <span>{props.stats.rating}</span>
                <span className="gray">{props.stats.reviewCount} . </span>
                <span className="gray">{props.location}</span>
            </div>
            <p className="card--title">{props.title}</p>
            <p className="card--price"><span className="bold">From ${props.price}</span> / person</p>
        </div>
    )
}