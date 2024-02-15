import { useState } from 'react'
import Deck from './gamecomponents/Deck'
import Game from './gamecomponents/Game'
import './index.css'

function Main() {
  const game = new Game()
  return (
    <>
    <div className="container">
      {
        Object.keys(game.players).map((players) => {
          return <div className="player-place">
            <h3>{players}</h3>
            {
              game.players[players].map((playerCards) => {
                return <div className="card"
                style={(playerCards.color != -1) ? {background: playerCards.color} : {background: 'black'}}>
                {playerCards.cardType}
              </div>
              })
            }
          </div>
        })
      }
      {/* {
        game.gameDeck.map((card) => {
          return <div className="card"
          style={(card.color != -1) ? {background: card.color} : {background: 'black'}}>
            {card.cardType}
            </div>
        })
      } */}
    </div>
    </>
  )
}

export default Main
