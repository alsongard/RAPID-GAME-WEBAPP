import React from "react";
import GameComponent from "./gameDisplay";
function GamesView()
{

    // state variable for getting form data
    const [gamePlatform, setFormData] = React.useState("pc");
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
        <div className="dark:bg-slate-500 ">
            <h1 className="text-center pt-[50px]  dark:text-white"> RAPID GAMES</h1>

            <form className="border-2 dark:border-white rounded-[20px] border-black w-[80%] mx-auto block p-[30px]  my-[20px] " onSubmit={handleSubmit}>
                <p className='mt-[20px] dark:text-white  '>To view games for specific device fill in the form</p>
                <label className="dark:text-white text-black">Select platform or device : </label>
                <select className=" dark:border-white block mt-[15px] rounded dark:bg-slate-500 border-2 text-black dark:text-white  py-[1.5px]  px-2" onChange={handleChange}  name="gamePlatform">
                    <option  value="pc" >PC (Windows)</option>
                    <option value="browser" >Web Browser</option>
                </select>
                <input className="text-[13px] rounded mt-[15px] px-[2.5px] bg-[rgba(142,158,82,0.8)] uppercase hover:bg-green-500 text-black" type="submit" value="submit"/>
            </form>
            <h2 className="text-center dark:text-white">By default the page displays pc games</h2>
            <div className="flex flex-row flex-wrap justify-between w-[1250px] px-[20px] mx-auto  ">
                {gamedata.length > 0 && myElements}
            </div>

        </div>
    )
};
export default GamesView;