import React from "react";
import All from "./All";
import {useState, useEffect} from "react";

function Category(props){
    
    let [data, setData] = useState(null);
    let [lang, setLang] = useState("all");
    
    useEffect(() => {
        fetch(`https://api.github.com/search/repositories?q=stars:%3E1+language:${lang}&sort=stars&order=desc&type=Repositories`)
        .then((res) => res.json())
        .then((data) => setData(data.items));
    }, [lang]);
    
    const handleClick = ({target}) => {
       let id = target.dataset.id;
        setData(null);
        setLang(id);
     }
    
    return (
        <main className="px-12 lg:px-16 2xl:px-64 pt-8 py-16">

            {/* Display categories */}
            <div className="flex flex-col items-center sm:flex-row sm:justify-center text-xl font-bold my-4 ">
                <h3 className={"inline-block cursor-pointer mx-6" + (lang === "all" ? " text-red-600" : "")} data-id="all" onClick={(e) => handleClick(e)}>All</h3>

                <h3 className={"inline-block cursor-pointer mx-6" + (lang === "javascript" ? " text-red-600" : "")}  data-id="javascript" onClick={(e) => handleClick(e)}>JavaScript</h3> 

                <h3 className={"inline-block cursor-pointer mx-6" + (lang === "ruby" ? " text-red-600" : "")} data-id="ruby" onClick={(e) => handleClick(e)}>Ruby</h3>

                <h3 className={"inline-block cursor-pointer mx-6" + (lang === "java" ? " text-red-600" : "")} data-id="java"  onClick={(e) => handleClick(e)}>Java</h3>

                <h3 className={"inline-block cursor-pointer mx-6" + (lang === "Css" ? " text-red-600" : "")} data-id="Css"  onClick={(e) => handleClick(e)}>CSS</h3>

                <h3 className={"inline-block cursor-pointer mx-6" + (lang === "python" ? " text-red-600" : "")} data-id="python"  onClick={(e) => handleClick(e)}>Python</h3>
            </div>

            {/* Display the data based on the category selected */}
            {
                data ? < All data = {data} darkMode={props.darkMode}/> : < h2 className="text-center text-2xl font-bold py-8">Loading...</h2>
            }
            </main>      
        )
    }
 

export default Category;