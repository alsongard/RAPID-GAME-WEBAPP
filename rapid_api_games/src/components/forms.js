import React from "react";

/*export default function Forms()
{
    const [firstName, setName] = React.useState("");
    const [secondName, setSecondName] = React.useState("");


    // replacing event.target.value to my Object will replace everything an dresult to an empty string

    function handleChange(event)
    {
        setName(()=>{
            console.log(event.target.value);
        })
    }
    function secondHandleChange(event)
    {
        setSecondName(()=>{
            console.log(event.target.value);
        })
    }
    return(
        <form>
            <input  type="text" onChange={handleChange} placeholder="enter First Name"/>
            <br/>
            <input type="text" onChange={secondHandleChange} placeholder="Enter Middle Name"/>
        </form>
    )
}
*/

// WORKING WITH MULTIPLE FORM INPUTS
// first assing all input element the name attribute,
// ensure that they are similar to those in the object

/*export default function NewForms()
{
    const [formData, setFormData] = React.useState({
        firstName: "",
        middleName: "",
        userEmail: ""
    });

    console.log(formData)
    function handleChange(event)
    {
        setFormData((prevFormData)=>{
            return {
                ...prevFormData,
                [event.target.name]: event.target.value
            }
        })
    }
    return (
        <form>
            <input name="firstName"  type="text" onChange={handleChange} placeholder="enter First Name"/>
            <br/>
            <input name="middleName" type="text" onChange={handleChange} placeholder="Enter Middle Name"/>
            <br/>
            <input type="email" name="userEmail" onChange={handleChange} placeholder="Enter email"/>
        </form>
    )
}
*/


// CONTROLLED INPUTS
// React Best Practise
// when typing in data into the input element, there are 2, one belonging to html input
//component and the other the stateObject formData However this in discourages, it should only 
// have a single value. The state is used to update html input
export default function NewForms()
{
    const [formData, setFormData] = React.useState({
        firstName: "",
        middleName: "",
        userEmail: ""
    });

    console.log(formData)
    function handleChange(event)
    {
        setFormData((prevFormData)=>{
            return {
                ...prevFormData,
                [event.target.name]: event.target.value
            }
        })
    }
    return (
        <form>
            <input name="firstName"  type="text" value={formData.firstName} onChange={handleChange} placeholder="enter First Name"/>
            <br/>
            <input name="middleName" type="text" value={formData.middleName} onChange={handleChange} placeholder="Enter Middle Name"/>
            <br/>
            <input type="email" name="userEmail" value={formData.userEmail} onChange={handleChange} placeholder="Enter email"/>
        </form>
    )
}
