
const GameCard = ({
    game
}) =>{

    return(
        <div className="allGames">
          <div className="allGames-info">
            <img src={game.imageUrl} alt="avatar"/>
            <h6>{game.category}</h6>
            <h2>{game.title}</h2>
            <a href="#" className="details-button">Details</a>
          </div>
        </div>
    )
}

export default GameCard;