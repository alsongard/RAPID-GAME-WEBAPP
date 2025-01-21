import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Home from "./homePage";
import Footer from "./footer";
import Header from "./header";


function Page()
{
    const [darkMode, setDarkMode] = React.useState(false);
    // function handleChange()
    // {
    //     setDarkMode((prevValue)=>{
    //         return !prevValue;
    //     })
    // };

    const answer = darkMode ? "dark" : "";
    return(
        <main className={`${answer}`}>
            <Header darkMode={darkMode} setDarkMode={setDarkMode}/>
            <Footer/>
            <Home/>
        </main>
    )
}

export default Page;