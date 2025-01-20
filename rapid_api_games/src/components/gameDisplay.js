function GameComponent(props)
{
    return (
        <div className="dark:border-white border-2 my-[20px]">
            <h2 className="dark:text-white"> Title: {props.item.title}</h2>
            <h2 className="dark:text-white"> Game Developer: {props.item.developer}</h2>
            <p className="dark:text-white">Game genre: {props.item.genre}</p>
            <p className="dark:text-white">Game url:<a target="_blank" rel="noopener noreferrer" href={props.item.game_url}>{props.item.game_url}</a></p>
            <a href={props.item.game_url}><img src={props.item.thumbnail} alt="game"/></a>
        </div>
    )
}

export default GameComponent;