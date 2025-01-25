import React from "react";
import {useParams} from "react-router-dom";

function GameInfo()
{
    const {gameId} = useParams()

    const [data, setData] = React.useState([]);
    
    React.useEffect(()=>{
        fetch(`/api/game?id=${gameId}`)
            .then(response => response.json())
            .then(data => setData(data))
    }, [gameId])
    // console.log("id 452");
    // console.log(data);
    console.log(gameId);
    console.log(typeof(data));
    // console.log(data.id)
    // console.log(data.minimum_system_requirements);
    const keys = Object.keys(data);
    
    console.log(keys);
    if (!data || !data.minimum_system_requirements)
    {
        return (<p>Loading....</p>)
    }
    const {os, processor, memory, graphics, storage} = data.minimum_system_requirements;

    return (
        
        <div className="dark:bg-slate-500 border-2 my-[20px]">
            <h2 className="dark:text-white"> Title: {data.title} </h2>
            <img src={data.thumbnail} alt="game"/>
            <p>Platform: {data.platform}</p>
            <p>Release Date: {data.release_date}</p>
            <div>
            <h3>Minimum Requirements</h3>
                <p>Operating System : {os}</p>
                <p>Processor : {processor}</p>
                <p>Memory : {memory}</p>
                <p>Graphics : {graphics} </p>
                <p>Storage : {storage}</p>
            </div>
            {/* {value && requirements } */}
            <p className="dark:text-white"> Game Developer:{data.developer} </p>
            <p  className="dark:text-white">Game publisher: {data.publisher} </p>
            <p  className="dark:text-white"> Game Status : {data.status}</p>
            <p className="dark:text-white">Game genre: {data.genre} </p>
            <a href={data.game_url}  target="_blank" rel="noopener noreferrer">{data.game_url}</a>
            <p  className="dark:text-white">Description: {data.description}</p>
        </div>
    )
}
export default GameInfo;