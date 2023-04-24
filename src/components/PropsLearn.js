import React from "react"
import { ReactDOM } from "react"
import personOne from "../images/katie-zaferes.png"

export default function PropsLearn(props) {

    return (
        <div className="contacts">
        
            <div className="contact-card">
                <img src={props.img}/>
                <h3>{props.name}</h3>
                <div className="info-group">
                    {/* <img src={personOne} /> */}
                    <p>{props.phone}</p>
                </div>
                <div className="info-group">
                    {/* <img src={personOne} /> */}
                    <p>{props.email}</p>
                </div>
            </div>
        </div>
    )
}