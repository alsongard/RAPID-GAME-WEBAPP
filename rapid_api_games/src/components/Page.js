import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Home from "./homePage";
import Footer from "./footer";
import Header from "./header";
import Testing from "./testingComp";

function Page()
{
    const [darkMode, setDarkMode] = React.useState(false);

    const answer = darkMode ? "dark" : "";
    return(
        <main className={`${answer}`}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<div> <Header darkMode={darkMode} setDarkMode={setDarkMode}/>  <Footer/></div>}>
                        <Route index element={<Home/>} />
                        <Route path="test"  element={<Testing/>} />
                    </Route>
                </Routes>
            </BrowserRouter>

        </main>
    )
}

export default Page;