import React, {useState} from "react";
import {navLinks} from "../index";

const NavigationSidebar = ({active, setActive}) => {
    return (
        <div className="list-group">
            {
                navLinks.map(link =>
                <a
                    className={`list-group-item ${active === link.name ?'active':''}`}
                    onClick={event => setActive(link.name)}
                >{link.name}</a>)
            }
        </div>
    );
};
export default NavigationSidebar;