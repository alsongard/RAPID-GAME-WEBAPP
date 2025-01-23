import React from "react";
import GameComponent from "./gameDisplay";
function GamesView()
{

    // state variable for getting form data
    const [gamePlatform, setFormData] = React.useState("");
    // state variable for controlling when useEffect is run
    const [isSubmitted, setIsSubmitted] = React.useState(false);
    // state variable for storing platform gamedata
    const [gamedata, setGameData] = React.useState([]);


    function handleChange(event)
    {
        setFormData(()=>{
            return event.target.value;
        })
    }

    function handleSubmit(event)
    {
        event.preventDefault();
        console.log("submit function running " + gamePlatform);
        setIsSubmitted(true);
    }

    // fetch data according to platform
    React.useEffect(()=>{
        fetch(`api/games?platform=${gamePlatform}`)
            .then(response => response.json())
            .catch(error => console.log(`Error while fetching data: ${error}`))
            .then(data => setGameData(data))
            .finally(()=> setIsSubmitted(false))
    },[isSubmitted]);

    console.log(gamedata.length)
    const myElements = Array.isArray(gamedata)
        ? gamedata.map((dataItems) => (
            <GameComponent key={dataItems.id} item={dataItems}/>
        ))
        : null;

    return(
        <div className="dark:bg-slate-500 h-[80vh]">
            <h1 className="text-center pt-[50px]  dark:text-black"> RAPID GAMES</h1>
            <p className='mt-[20px] w-[1200px] mx-auto '>To view games for specific device fill in the form</p>

            <form className="border-2 border-black w-[80%] mx-auto block p-[30px] rounded-sm my-[20px] text-white" onSubmit={handleSubmit}>
                <label>Select platform or device : </label>
                <select className="block dark:bg-slate-500 border-2 border-white dark:text-black border-none py-[1.5px]  px-2" onChange={handleChange}  name="gamePlatform">
                    <option  value="pc" >PC (Windows)</option>
                    <option value="browser" >Web Browser</option>
                </select>
                <input className=" dark:text-black" type="submit" value="submit"/>
            </form>
            {gamedata.length > 0 && myElements}

        </div>
    )
};
export default GamesView;