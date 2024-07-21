import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";

const Practice = () => {
  let [word, setWord] = useState("");

  let autoText = () => {
    setWord("Hey Welcome to the Page!");
  };
  return (
    <>
      <TextField
        value={word}
        id="filled-basic"
        label="Filled"
        variant="filled"
      />{" "}
      <br></br>
      <br></br>
      <Button variant="contained" onClick={autoText}>
        Click to Autofill
      </Button>
    </>
  );
};

export default Practice;
