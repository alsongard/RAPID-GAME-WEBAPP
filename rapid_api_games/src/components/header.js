import { Link } from "react-router-dom";
function Header({darkMode, setDarkMode})
{
    function handleChange()
    {
        setDarkMode((darkMode)=>{
            return !darkMode;
        })
    };
    return(
        <header className="dark:bg-slate-500 justify-between flex flex-row pl-[30px] px-[50px]">
            <nav  className="flex flex-row w-[30%] justify-between list-none">
                <li>Home</li>
                <li>PC GAMES</li>
                <li>Web Browser</li>
            </nav>
            <button onClick={handleChange}>Dark</button>
        </header>
    )
}
export default Header;