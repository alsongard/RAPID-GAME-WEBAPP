import React from "react";

function GamesView()
{
    const [formData, setFormData] = React.useState({
        gamePlatform:""
    })

    function handleChange(event)
    {
        const {name,value} = event.target;
        setFormData((prevFormData)=>{
            return (
                {
                    ...prevFormData,
                    [name]: value
                }
            )
        })
    }

    let platform = "";
    function handleSubmit(event)
    {
        event.preventDefault();
        platform = formData.gamePlatform;
    }

    // fetch data according to platform:
    
    
    return(
        <div>
            <h1> RAPID GAMES</h1>
            <p>To view games for specific device fill in the form</p>

            <form onSubmit={handleSubmit}>
                <label>Select platform or device : </label>
                <select  onChange={handleChange}  name="gamePlatform">
                    <option name="PC (Windows)" value="PC (Windows)" >PC (Windows)</option>
                    <option name="Web Browser" value="Web Browser" >Web Browser</option>
                    <option name="PC (Windows), Web Browser" value="PC (Windows), Web Browser" > PC (Windows) Web Browser</option>
                </select>
                <input type="submit" value="submit"/>
            </form>
        </div>
    )
};
export default GamesView;