import React from "react";
import { Link } from "react-router-dom";

export default function(props){
// Data that we'll need:
    // - background image
    // - logo
    // - description
    // - id: id
    const { id, title, description, category, thumb_image_url, url, logo} = props.item;

    return(
        <div  className="portfolioItems">
            <h3>{title}</h3>
            <h4>{url}</h4>
            <h5>ID:{id}</h5>
            <p>CATEGORY: {category}</p>
            <article>
                DESCRIPTION:<br/>
                {description}</article>
                <img src={thumb_image_url} />
            <Link to={`/portfolio/${title}`}>Link</Link>
        </div>
    );
}