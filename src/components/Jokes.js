import React from "react";
export default function Jokes(props){
    return(
        <div>
            <h1>Setup : {props.setup}</h1>
            <p>Punchline : {props.punchline}</p>
        </div>
    );
}