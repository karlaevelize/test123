import React, { useState } from "react";
import Player from "../Player/Player";
import AddPlayerForm from "../AddPlayerForm"
import "./Scoreboard.scss"

function compare_score(player_a, player_b) {
    return player_b.score - player_a.score;
}

function compare_name(player_a, player_b){
    return player_a.name.localeCompare(player_b.name)
}

export default function Scoreboard() {
  const [players, set_players] = useState([
    { id: 1, name: "Violeta", score: 11 },
    { id: 2, name: "Eszter", score: 14 },
    { id: 3, name: "Jeroen v2", score: 4 },
    { id: 4, name: "Lisa", score: 42 },
  ]);

  const [sort_by, set_sort_by] = useState("score");

  const sortFunction = sort_by === "score"
        ? compare_score
        : compare_name

  const players_sorted = [...players].sort(sortFunction);
  

  const change_sorting = event => {
    console.log("new sort order:", event.target.value);
    set_sort_by(event.target.value);
  };

  const incrementScore = (id) => {
    console.log(id)
    const new_players_array = players.map(player => {
        if (player.id === id) {
          return {
            ...player,
            score: player.score + 1
          };
        } else {
          return player;
        }
      });
      set_players(new_players_array)
  };

  const resetScore = () => {
    const reset_players = players.map(player => {
        if (player) {
          return {
            ...player,
            score: player.score - player.score
          };
        } else {
          return player;
        }
      });
      set_players(reset_players)
  };

  const addPlayer = name => {
    console.log("Let's add a new player with the name:", name);
    const newPlayer = { name: name, score: 0, id: players.length + 1 };
    const newPlayers = [...players, newPlayer];
    console.log(newPlayers);
    set_players(newPlayers);
  };


  return (
    <div className="Scoreboard">
      <AddPlayerForm addPlayer={addPlayer}/>
      <p>Player's scores:</p>
      <button onClick={resetScore}>Reset Score</button>
      <br/><br/>
      <p>
        Sort order:{" "}
        <select onChange={change_sorting}>
            <option value="score">Sort by score</option>
            <option value="name">Sort by name</option>
        </select>
      </p><br/>
      {players_sorted.map(player => 
        <Player id={player.id} name={player.name} score={player.score} incrementScore={incrementScore}/>
        )}
    </div>
  );
}