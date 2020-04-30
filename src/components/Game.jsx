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

const initialState = {
  coin: getRandomCoordinates(),
  player: [0, 0],
  direction: "",
  collectedCoins: 0,
  yell: null,
};

class Game extends Component {
  state = initialState;

  componentDidMount() {
    console.log(this.state.player);
    document.onkeydown = this.move;

    axiosWithAuth()
      .get("/adv/init/") //start
      .then((res) => {
        console.log(res);
        this.setState({
          yell: res.data,
        });
      })
      .catch((err) => {
        console.log("Error fetching data", err);
      });
  }

  componentDidUpdate() {
    console.log(this.state.player);
    this.grabCoin();
  }

  move = (e) => {
    // axiosWithAuth()
    //   .post("/registration/", register)
    //   .then((res) => {
    //     localStorage.setItem("key", res.data.key);
    //     console.log(res);
    //     props.history.push("/");
    //   })
    //   .catch((err) => {
    //     console.log("Error Registering In", err);
    //   });

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

  // onGameOver() {
  //   alert(`Border wall ${this.state.player.length}`);
  //   this.setState(initialState);
  // }

  render() {
    return (
      <div className="game-area">
        <Room player={this.state.player} coin={this.state.coin} />
      </div>
    );
  }
}

export default Game;
