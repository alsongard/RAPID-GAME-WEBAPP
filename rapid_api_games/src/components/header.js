import { Link, Outlet } from "react-router-dom";
function Header({darkMode, setDarkMode})
{
    function handleChange()
    {
        setDarkMode((darkMode)=>{
            return !darkMode;
        })
    };
    return(
        <div>

            <header className="dark:bg-slate-500 py-[10px] justify-between flex flex-row pl-[30px] px-[50px] bg-gradient-to-tr from-[rgba(125,212,201,0.69)] to-[#323232]">
                <nav  className="flex flex-row w-[30%] justify-between list-none">
                    <li><Link className="uppercase" to="/">HOME</Link></li>
                    <li><Link className="uppercase" to="games">games</Link></li>
                </nav>
                <button onClick={handleChange}>Dark</button>

            </header>
            <Outlet/>

        </div>
    )
}
export default Header;