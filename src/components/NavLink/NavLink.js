import React from 'react';
import { Link } from 'react-router-dom';
import './NavLink.css';

function NavLink(props) {
    return (
        <Link
            to={props.path}
            className={`nav-link nav-link_type_${props.name} nav-link_text_${props.size} nav-link_${props.active} nav-link_color_${props.color}`}
        >
            {props.title}
        </Link>
    );
}

export default NavLink;
