import React from "react";
import {navLinks} from "../index";

const NavigationSidebar = ({active, setActive}) => {
    return (
        <div className="list-group">
            {
                navLinks.map((link, index) =>
                <button
                    className={`list-group-item ${active === link.name ?'active':''}`}
                    onClick={event => setActive(link.name)}
                    key={index}
                >{link.name}</button>)
            }
        </div>
    );
};
export default NavigationSidebar;