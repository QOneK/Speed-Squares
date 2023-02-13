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

function Square() {
  return <div className="square" style={squareStyle}></div>;
}


function Board() {
  const [time, setTimer] = useState(10); //time for the counter (start: 10 ; end : 0)
  const [press, setPress] = useState(false); //state for the "start" button
  const notInitialRender = useRef(false)
    
  useEffect(() => {
    if (notInitialRender.current){

    } else {
      notInitialRender.currnet = true
    }
    
    
    const interval = setInterval(() => {
      if (time > 0) {
        setTimer((time) => time - 1);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [press, time]);

  function buttonPress () {
    setPress(true)
  }
  
  return (
    <div style={containerStyle} className="gameBoard">
      <div id="statusArea" className="status" style={instructionsStyle}>
        Points: <span>0</span>
      </div>
      <div id="winnerArea" className="winner" style={instructionsStyle}>
        Time left: <span>{time}</span>
      </div>
      <button style={buttonStyle} onClick = {() => buttonPress()}>Start Game</button>
      <div style={boardStyle}>
        <div className="board-row" style={rowStyle}>
          <Square />
          <Square />
          <Square />
        </div>
        <div className="board-row" style={rowStyle}>
          <Square />
          <Square />
          <Square />
        </div>
        <div className="board-row" style={rowStyle}>
          <Square />
          <Square />
          <Square />
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
