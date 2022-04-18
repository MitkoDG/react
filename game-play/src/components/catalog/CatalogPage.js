import { useEffect, useState } from "react";
import * as gameServices from "../../services/gameServices"
import GameCard from "./GameCard";


const GameCatalog = ({
  navigationChangeHandler
}) => {
  const [games, setGames] = useState([]);

  useEffect(() => {
      gameServices.getAll()
      .then(result => {
        setGames(result)})
  }, []);

  return (
    <section id="catalog-page">
      <h1>All Games</h1>

      { games.length > 0
      ? games.map(x => <GameCard key={x._id} game={x} navigationChangeHandler={navigationChangeHandler}/>)
      : <h3 className="no-articles">No articles yet</h3>}

      
    </section>
  );
}

export default GameCatalog;