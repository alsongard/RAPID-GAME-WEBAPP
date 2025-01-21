function GameComponent(props)
{
    return (
        <div className="dark:border-white my-[20px]">
            <h2 className="dark:text-white"> Title: {props.item.title}</h2>
            <a lcaa href={props.item.game_url}><img className="rounded" src={props.item.thumbnail} alt="game"/></a>
        </div>
    )
}

export default GameComponent;