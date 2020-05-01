import React, { Component } from "react";
import Room from "./Rooms";
import axiosWithAuth from "./axiosWithAuth";
import "../styles/game.css";

const getRandomCoordinates = () => {
  let min = 5;
  let max = 88;
  let x = Math.floor((Math.random() * (max - min + 1) + min) / 2) * 2;
  let y = Math.floor((Math.random() * (max - min + 1) + min) / 2) * 2;
  return [x, y];
};
const getPokeBall = () => {
  let min = 1;
  let max = 4;
  let x = Math.floor((Math.random() * (max - min + 1) + min) / 2) * 2;
  return [x];
};

const initialState = {
  coin: getRandomCoordinates(),
  pokeball: null,
  player: [0, 0],
  direction: "",
  collectedCoins: 0,
  yell: getPokeBall(),
  collectedBalls: 0,
};

class Game extends Component {
  state = initialState;

  componentDidMount() {
    console.log(this.state);
    document.onkeydown = this.move;
  }

  componentDidUpdate() {
    console.log(this.state);
    this.grabCoin();
    this.grabPokeBall();
    this.generatePokeBall();
    this.onGameOver();
  }

  move = (e) => {
    let pixel = [...this.state.player];

    if (pixel[1] <= 88) {
      // Up
      if (e.keyCode === 38) {
        pixel[1] += 2;
        this.setState({ player: pixel });
      }
    }
    if (pixel[1] >= 2) {
      // Down
      if (e.keyCode === 40) {
        pixel[1] -= 2;
        this.setState({ player: pixel });
      }
    }
    if (pixel[0] <= 88) {
      // Left
      if (e.keyCode === 37) {
        pixel[0] += 2;
        this.setState({ player: pixel });
      }
    }
    if (pixel[0] >= 2) {
      // Right
      if (e.keyCode === 39) {
        pixel[0] -= 2;
        this.setState({ player: pixel });
      }
    }
  };

  grabPokeBall(e) {
    let player = this.state.player;
    let pokeball = this.state.pokeball;
    let collectedBalls = this.state.collectedBalls;
    if (pokeball !== null) {
      if (player[0] === pokeball[0] && player[1] === pokeball[1]) {
        collectedBalls += 1;
        this.setState({
          pokeball: null,
          collectedBalls: collectedBalls,
        });
        // this.generatePokeBall();
      }
    }
  }

  grabCoin(e) {
    let player = this.state.player;
    let coin = this.state.coin;
    let collectedCoins = this.state.collectedCoins;
    // console.log(collectedCoins);
    // console.log(coin);
    // console.log(player);
    if (player[0] === coin[0] && player[1] === coin[1]) {
      collectedCoins += 1;
      this.setState({
        coin: getRandomCoordinates(),
        collectedCoins: collectedCoins,
      });
    }
  }
  generatePokeBall(e) {
    let collectedCoins = this.state.collectedCoins;
    let yell = this.state.yell;
    if (collectedCoins > yell) {
      return this.setState({
        pokeball: getRandomCoordinates(),
        collectedCoins: 0,
      });
    }
  }

  onGameOver() {
    if (this.state.collectedBalls === 3) {
      alert(`You got 3 PokeBalls! Congrats!`);
      this.setState(initialState);
    }
  }

  render() {
    return (
      <div className="game-area">
        <Room
          player={this.state.player}
          coin={this.state.coin}
          counter={this.state.collectedCoins}
          pokeball={this.state.pokeball}
          counterPoke={this.state.collectedBalls}
        />
      </div>
    );
  }
}

export default Game;
