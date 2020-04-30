import React, { Component } from "react";
import Room from "./Rooms";
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
};

class Game extends Component {
  state = initialState;

  componentDidMount() {
    console.log(this.state.player);
    document.onkeydown = this.move;
  }
  componentDidUpdate() {
    console.log(this.state.player);
    this.grabCoin();
  }

  move = (e) => {
    let pixel = [...this.state.player];
    let x = [];
    let y = [];
    if (pixel[1] <= 88) {
      // Up
      if (e.keyCode === 38) {
        let y = (pixel[1] += 2);
        this.setState({ player: pixel });
      }
    }
    if (pixel[1] >= 2) {
      // Down
      if (e.keyCode === 40) {
        let y = (pixel[1] -= 2);
        this.setState({ player: pixel });
      }
    }
    if (pixel[0] <= 88) {
      // Left
      if (e.keyCode === 37) {
        let x = (pixel[0] += 2);
        this.setState({ player: pixel });
      }
    }
    if (pixel[0] >= 2) {
      // Right
      if (e.keyCode === 39) {
        let x = (pixel[0] -= 2);
        this.setState({ player: pixel });
      }
    }
  };

  grabCoin(e) {
    let player = this.state.player;
    let coin = this.state.coin;
    let collectedCoins = this.state.collectedCoins;
    console.log(collectedCoins);
    console.log(coin);
    console.log(player);
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

//   useEffect(() => {
//     axiosWithAuth()
//       .get("/adv/init/") //start
//       .then((res) => {
//         console.log(res);
//         setData(res.data);
//       })
//       .catch((err) => {
//         console.log("Error fetching data", err);
//       });
//   }, []);
