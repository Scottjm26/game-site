import React from 'react'

import './App.css'

function App() {
 const key = "3dfee2d56c9e4d17a4179734fede4366"
  const [game, setGame] = React.useState([])
  // const [screenshots, setScreenshots] = React.useState([])

  React.useEffect(() => {
    fetch(`https://api.rawg.io/api/games?key=${key}&dates=2019-09-01,2019-09-30&platforms=18,1,7`)
        .then(res => res.json())
        // .then(data=> console.log(data))
        .then(data => setGame(data.results))
}, [])




  let newGame = game.map(function(games){ return <div id="main-div"><div id="name-text" key={games.id}>{games.name}</div>
    <div id="image-div"><img id ="game-images" src={games.short_screenshots[0].image}/></div></div>})
  


  return (<>
  <div id="game-body">
    {newGame}
    </div>
    </>
  )
  
}

export default App
