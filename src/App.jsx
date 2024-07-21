import { useState } from "react";
import GamePlay from "./componenets/Gameplay";
import StartGame from "./componenets/StartGame";
import styled from "styled-components";

function App() {
  const [isGameStarted, setIsGameStarted] = useState(false);

  let toggleGamePlay = () => {
    setIsGameStarted((prev) => !prev);
  };
  return (
    <>{isGameStarted ? <GamePlay /> : <StartGame toggle={toggleGamePlay} />}</>
  );
}

export default App;
