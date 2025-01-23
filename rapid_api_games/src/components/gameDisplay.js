import { Link } from "react-router-dom";
function GameComponent(props)
{
    return (
        <div className="dark:border-white my-[20px]">
            <h2 className="dark:text-white"> Title: {props.item.title}</h2>
            <Link to={`/gameInfo/${props.item.id}` }><img className="rounded" src={props.item.thumbnail} alt="game"/></Link> 
        </div>
    )
}

export default GameComponent;

// <a  href={props.item.game_url}><img className="rounded" src={props.item.thumbnail} alt="game"/></a>