import React from "react";
import GameComponent from "./gameDisplay";

function Home()
{
    const [data, setData] = React.useState([])

    React.useEffect(()=>{
        fetch("/api/games")
            .then(response => response.json())
            .then(data => setData(data))
    }, []);

    console.log("this is data:")
    console.log(typeof(data));
    console.log(data.length)

    // function handleCount()
    // {
    //     setCount((prevValue)=>{
    //         return prevValue + 1;
    //     })
    // }


    if (!data)
    {
        return (
            <div>
                <h1>Loading...</h1>
            </div>
        )
    }
    const myElements = data.slice(0, 51).map((dataItems)=>{
        return (<GameComponent key={dataItems.id} item={dataItems}/>)
    })

    return (
        <section className="dark:bg-slate-500 pt-[10px]">
            <div>
                <h1 className="dark:text-white text-center text-[23px]">Welcome to Rapid Games</h1>
            </div>
            <div className="ml-[50px] flex flex-row justify-evenly w-[10%]">
            </div>

            <div className="flex flex-row flex-wrap justify-between w-[1250px] px-[20px] mx-auto  ">

                {myElements}
            </div>
        </section>
    )
}

export default Home;