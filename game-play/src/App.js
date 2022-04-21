import { useState } from "react"
import { Route, Switch, Link } from "react-router-dom";

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

  const routers = {
    '/': <WelcomeWorld />,
    '/gameCatalog': <GameCatalog />,
    '/register': <Register />,
    '/create': <CreateGame />,
    '/login': <Login />,
    '/editGame': <EditGame />,
    // '/details',

  }


  return (
    <div id="box">
      <Header />


      <main id="main-content">
        <Switch>
          <Route path="/" exact component={WelcomeWorld} />
          <Route path="/gameCatalog" component={GameCatalog} />
          <Route path="/create" component={CreateGame} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/games/:gameId" component={GameDetails} />
        </Switch>
      </main>

      {/* <main id="main-content">
        { routers[page] || <NoPage />}
      </main> */}


    </div>
  );
}

export default App;
