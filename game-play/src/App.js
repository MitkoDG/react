import { useState } from "react"

import GameCatalog from "./components/catalog/CatalogPage";
import CreateGame from "./components/CreateGame";
import EditGame from "./components/EditGame";
import GameDetails from "./components/GamesDetails";
import Header from "./components/Header";
import Login from "./components/Login";
import Register from "./components/Register";
import WelcomeWorld from "./components/WelcomeWorld";
import NoPage from "./components/NoPage"



function App() {
  const [page, setPage] = useState('/')

  const routers = {
    '/': <WelcomeWorld />,
    '/gameCatalog': <GameCatalog />,
    '/register': <Register />,
    '/create': <CreateGame />,
    '/login': <Login />,
    '/editGame': <EditGame />,

  }

  const navigationChangeHandler = (path) =>{
    setPage(path);
  }

  return (
    <div id="box">
      <Header 
      navigationChangeHandler={navigationChangeHandler}
      />


      <main id="main-content">
        { routers[page] || <NoPage />}
      </main>


    </div>
  );
}

export default App;
