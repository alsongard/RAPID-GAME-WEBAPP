import {  NavLink, Outlet } from "react-router-dom";
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
                <nav  className="flex flex-row w-[20%]  justify-evenly list-none">
                    <NavLink
                        to="/"
                        className={({isActive})=>
                            isActive ? "text-red-500 uppercase  hover:text-green-400 ease-in duration-[0.75s]" : "text-black uppercase  hover:text-green-400 ease-in duration-[0.75s]"
                        }
                        
                    >
                    Home
                    </NavLink>

                    <NavLink
                        to="/games"
                        className={({isActive})=>
                            isActive ? "text-red-500 uppercase  hover:text-green-400 ease-in duration-[0.75s]" : "text-white uppercase  hover:text-green-400 ease-in duration-[0.75s]"
                        }
                    >
                        GAMES
                    </NavLink>
                </nav>
                <button className="dark:text-white text-black" onClick={handleChange}>Dark</button>

            </header>
            <Outlet/>

        </div>
    )
}
export default Header;