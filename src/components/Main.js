import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Header from "./Header";
import Category from "./Category";
import GithubBattle from "./GithubBattle";
import UserBattle from "./UserBattle";
import {useState} from "react";

function Main(props){

    let [darkMode, setDarkMode] = useState(false);
    const handleClick = () => {
        setDarkMode(!darkMode);
    }

    return (
        <div className={darkMode ? "bg-gray-900 text-white min-h-screen": ""}>
        <BrowserRouter>
            <Switch>
                < Header handleClick={handleClick} darkMode={darkMode}/>
                < Route path="/" exact>
                    < Category darkMode={darkMode}/>
                </Route>
                < Route path="/battle">
                    < GithubBattle darkMode={darkMode}/>
                </Route>
                < Route path="/userbattle" >
                    < UserBattle darkMode={darkMode}/>
                </Route>
            </Switch>
        </BrowserRouter>
        </div>
    )
}


export default Main;
