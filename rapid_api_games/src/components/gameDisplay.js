function GameComponent(props)
{
    return (
        <div className="dark:border-white border-2 my-[20px]">
            <h2 className="dark:text-white"> Title: {props.item.title}</h2>
            <a href={props.item.game_url}><img src={props.item.thumbnail} alt="game"/></a>
        </div>
    )
}

export default GameComponent;