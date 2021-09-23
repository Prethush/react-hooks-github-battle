import { NavLink } from "react-router-dom";
import React from "react";

function Header(props){
    
    return (
            <header className="pt-20 px-12 lg:px-16 2xl:px-64 flex flex-col items-center sm:flex-row sm:justify-between sm:pb-12">
            <div>
                <NavLink exact activeClassName="active" to="/">
                    <h3 className="inline-block text-xl font-bold">Popular</h3>
                </NavLink>
                < NavLink activeClassName="active" to="/battle">
                    <h3 className="inline-block text-xl ml-6 font-bold">Battle</h3>
                </NavLink>
            </div>
            <div className="mr-24 my-4">
                <i className={props.darkMode ? "fas fa-lightbulb text-2xl text-yellow-400": "fas fa-lightbulb text-2xl"} onClick={props.handleClick}></i>
            </div>
        </header>  
    );
}

export default Header;