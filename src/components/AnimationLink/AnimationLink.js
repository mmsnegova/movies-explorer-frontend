import React from "react";
import "./AnimationLink.css"

function AnimationLink(props) {
    return (
        <section className='animation-link'>
            {props.children}
        </section>
    )
}

export default AnimationLink;