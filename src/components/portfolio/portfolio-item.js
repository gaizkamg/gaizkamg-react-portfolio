import React from "react";
import { Link } from "react-router-dom";

export default function(props){
    return(
        <div  className="portfolioItems">
            <h3>{props.title}</h3>
            <h4>{props.url}</h4>
            <h5>ID:{props.id}</h5>
            <p>CATEGORY: {props.category}</p>
            <article>
                DESCRIPTION:<br/>
                {props.description}</article>
            <Link to={`/portfolio/${props.title}`}>Link</Link>
        </div>
    );
}