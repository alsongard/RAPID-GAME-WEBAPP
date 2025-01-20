import React from "react";
import GameComponent from "./gameDisplay";
function HomePage()
{
    const [count, setCount] = React.useState(0);
    const [data, setData] = React.useState([])
    const [darkMode, setDarkMode] = React.useState(false);
    function handleChange()
    {
        setDarkMode((prevValue)=>{
            return !prevValue;
        })
    };
    function handleCount()
    {
        setCount((prevValue)=>{
            return prevValue + 1;
        })
    }
    // console.log(darkMode);
    const answer = darkMode ? "dark" : "";

    React.useEffect(()=>{
        fetch("/api/games")
            .then(response => response.json())
            .then(data => setData(data))
    }, [count])

    console.log("this is data:")
    console.log(typeof(data));
    console.log(data.length)

    const myElements = data.slice(0, 50).map((dataItems)=>{
        return (<GameComponent key={dataItems.id} item={dataItems}/>)
    })
    return (

        <div className={`${answer}`}>
            <header className="dark:bg-slate-500">
                <button onClick={handleChange}>Dark</button>
            </header>
            <section className="dark:bg-black">

                <h1 className="dark:text-white ">Welcome to Rapid Games</h1>
                <button className="dark:text-slate-200" onClick={handleCount} >Add</button>
                <p className="dark:text-white">{count}</p>


                {myElements}
            </section>
        </div>
    )
}

export default HomePage;