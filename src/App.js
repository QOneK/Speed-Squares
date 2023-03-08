import React, { useState, useEffect } from "react";

/*
Description of program:

Speed Square
Speed squares

Create a game where you have to click on the squares as many active squares as possible in 10 seconds. Use React and no other libraries.

How the game works

- Click on Start to start the game.
- every second a new square set of squares will be active (green) at random. (50% chance)
- clicking on an active square will increase your score by 1 and make the square inactive (grey)
- every second the time left will decrease by 1
- when the time is up the game is over and you can click on Start to start a new game
- the score is reset to 0 when you start a new game
- it will say "Game Over" when the game is over and if you click on Start it will start a new game
- if you click on start when the game is not over it do nothing

Note: This assessment does not have a score at the end, it is pass or fail. If you do not pass unless the application works as described above.

Gif is slowed down to make it easier to see
*/


const rowStyle = {
  display: "flex",
};

const squareStyle = {
  width: "60px",
  height: "60px",
  backgroundColor: "#ddd",
  margin: "4px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontSize: "20px",
  color: "white",
};

const squareStyleActive = {
  width: "60px",
  height: "60px",
  backgroundColor: "limegreen",
  margin: "4px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontSize: "20px",
  color: "white",
};

const boardStyle = {
  backgroundColor: "#eee",
  width: "208px",
  alignItems: "center",
  justifyContent: "center",
  display: "flex",
  flexDirection: "column",
  border: "3px #eee solid",
};

const containerStyle = {
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
};

const instructionsStyle = {
  marginTop: "5px",
  marginBottom: "5px",
  fontWeight: "bold",
  fontSize: "16px",
};

const buttonStyle = {
  marginTop: "15px",
  marginBottom: "16px",
  width: "80px",
  height: "40px",
  backgroundColor: "#8acaca",
  color: "white",
  fontSize: "16px",
};

function Board() {
  const [time, setTimer] = useState(10); //time for the counter (start: 10 ; end : 0)
  const [press, setPress] = useState(false); //state for the "start" button
  const [points, setPoints] = useState(0); //state for points
  const [gameover, setGameover] = useState(""); //state for gameover text

  const [status, setStatus] = useState({
    a: 0,
    b: 0,
    c: 0,
    d: 0,
    e: 0,
    f: 0,
    g: 0,
    h: 0,
    i: 0,
  }); //state for boxes

  function Square({ status, id }) {
    //squareStyle : white ; squareStyleActive : green
    if (status === 0) {
      return (
        <button
          id={id}
          status={status}
          style={squareStyle}
          onClick={() => boxPress({ status, id })}
        >
          <div className="square"></div>
        </button>
      );
    } else if (status === 1) {
      return (
        <button
          id={id}
          status={status}
          style={squareStyleActive}
          onClick={() => boxPress({ status, id })}
        >
          <div className="square"></div>
        </button>
      );
    }
  }

  useEffect(() => {
    const interval = setInterval(() => {
      if (time > 0 && press === true) {
        setTimer((time) => time - 1);
        let num;
        num = [];
        for (let i = 0; i < 9; i++) {
          let random = Math.floor(Math.random() * 2);
          num.push(random);
        }
        setStatus({
          a: num[0],
          b: num[1],
          c: num[2],
          d: num[3],
          e: num[4],
          f: num[5],
          g: num[6],
          h: num[7],
          i: num[8],
        });
      } else if (time === 0) {
        setTimer(10);
        setPress(false);
        setGameover("Game Over");
        setStatus({ a: 0, b: 0, c: 0, d: 0, e: 0, f: 0, g: 0, h: 0, i: 0 });
      }
    }, 1000);
    return () => clearInterval(interval);
  },[time,press]);

  function buttonPress() {
    setPress(true);
    setGameover("");
    setPoints(0);
  }

  function boxPress(event) {
    console.log(event)
    if (event.status === 1){
      if (event.id === 0){
        setStatus({...status, a : 0})
      } else if (event.id === 1){
        setStatus({...status, b : 0})
      } else if (event.id === 2){
        setStatus({...status, c : 0})
      } else if (event.id === 3){
        setStatus({...status, d : 0})
      } else if (event.id === 4){
        setStatus({...status, e : 0})
      } else if (event.id === 5){
        setStatus({...status, f : 0})
      } else if (event.id === 6){
        setStatus({...status, g : 0})
      } else if (event.id === 7){
        setStatus({...status, h : 0})
      } else if (event.id === 8){
        setStatus({...status, i : 0})
      }
      setPoints(points=> points + 1)
    } 

  }

  return (
    <div style={containerStyle} className="gameBoard">
      <div id="statusArea" className="status" style={instructionsStyle}>
        Points: <span>{points}</span>
      </div>
      <div id="winnerArea" className="winner" style={instructionsStyle}>
        Time left: <span>{time}</span>
      </div>
      <h1>{gameover}</h1>
      <button style={buttonStyle} onClick={() => buttonPress()}>
        Start Game
      </button>
      <div style={boardStyle}>
        <div className="board-row" style={rowStyle}>
          <Square status={status.a} id={0} />

          <Square status={status.b} id={1} />

          <Square status={status.c} id={2} />
        </div>
        <div className="board-row" style={rowStyle}>
          <Square status={status.d} id={3} />

          <Square status={status.e} id={4} />

          <Square status={status.f} id={5} />
        </div>
        <div className="board-row" style={rowStyle}>
          <Square status={status.g} id={6} />

          <Square status={status.h} id={7} />

          <Square status={status.i} id={8} />
        </div>
      </div>
    </div>
  );
}

function Game() {
  return (
    <div className="game">
      <div className="game-board">
        <Board />
      </div>
    </div>
  );
}

function App() {
  return <Board />;
}

export default App;
