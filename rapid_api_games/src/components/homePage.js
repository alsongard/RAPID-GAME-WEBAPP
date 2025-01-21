import React from "react";
import GameComponent from "./gameDisplay";

function Home()
{
    const [count, setCount] = React.useState(0);
    const [data, setData] = React.useState([])

    React.useEffect(()=>{
        fetch("/api/games")
            .then(response => response.json())
            .then(data => setData(data))
    }, [count])

    console.log("this is data:")
    console.log(typeof(data));
    console.log(data.length)

    function handleCount()
    {
        setCount((prevValue)=>{
            return prevValue + 1;
        })
    }


    const myElements = data.slice(0, 50).map((dataItems)=>{
        return (<GameComponent key={dataItems.id} item={dataItems}/>)
    })

    return (
        <section className="dark:bg-black">
            <h1 className="dark:text-white ">Welcome to Rapid Games</h1>
            <div>
                <button onClick={handleCount}>Add</button>
                <p>{count}</p>
            </div>

            {myElements}
        </section>
    )
}

export default Home;