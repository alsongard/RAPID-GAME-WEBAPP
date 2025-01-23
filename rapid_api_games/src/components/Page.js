import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Home from "./homePage";
import Footer from "./footer";
import Header from "./header";
// import Testing from "./testingComp";
import GameInfo  from "./gameInfo";
import Forms from "./forms";
import GamesView from "./gamesView";

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
                        <Route path="gameInfo/:gameId" element={<GameInfo/>}/>
                        <Route path="games" element={<GamesView/>}/>
                        <Route path="forms" element={<Forms/>}/>
                    </Route>
                </Routes>
            </BrowserRouter>

        </main>
    )
}

export default Page;