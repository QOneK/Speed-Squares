import React, { useState, useEffect } from "react";

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

let random;
function Square(){
  //squareStyle : white ; squareStyleActive : green
  //random function
  random = Math.floor(Math.random() * 2);

  if (random > 0.5) {
    return <div className="square" style={squareStyle}></div>;
  } else if (random < 0.5) {
    return <div className="square" style={squareStyleActive}></div>;
  }

}

function Board() {
  const [time, setTimer] = useState(10); //time for the counter (start: 10 ; end : 0)
  const [press, setPress] = useState(false); //state for the "start" button
  const [points, setPoints] = useState(0);
  const [gameover, setGameover] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      if (time > 0 && press === true) {
        setTimer((time) => time - 1);
      } else if (time === 0 && press === true) {
        setTimer(10);
        setPress(false);
        setGameover("Game Over");
      }
    }, 100);
    return () => clearInterval(interval);
  });

  function buttonPress() {
    setPress(true);
    setGameover("");
    setPoints(0);
  }

  function Button({id}) {
    <button id = {id}>

    </button>
  }

  function boxPress(){
    console.log(id)
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
          <Button id={1} onClick={() => boxPress()}>
            <Square />
          </Button>
          <Button id={2} onClick={() => boxPress()}>
            <Square />
          </Button>
          <Button id={3} onClick={() => boxPress()}>
            <Square />
          </Button>
        </div>
        <div className="board-row" style={rowStyle}>
          <Button id={4} onClick={() => boxPress()}>
            <Square />
          </Button>
          <Button id={5} onClick={() => boxPress()}>
            <Square />
          </Button>
          <Button id={6} onClick={() => boxPress()}>
            <Square />
          </Button>
        </div>
        <div className="board-row" style={rowStyle}>
          <Button id={7} onClick={() => boxPress()}>
            <Square />
          </Button>
          <Button id={8} onClick={() => boxPress()}>
            <Square />
          </Button>
          <Button id={9} onClick={() => boxPress()}>
            <Square />
          </Button>
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
