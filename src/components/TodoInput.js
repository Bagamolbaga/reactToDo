import React, { useContext } from "react";
import Context from "../context";
import "./styleComponents/TodoInput.css";

import Input from "@material-ui/core/Input";
import Button from "@material-ui/core/Button";

export default function TodoInput({ inputState }) {
  const { setInputState, createTask } = useContext(Context);

  function inputSubmit(e) {
    e.preventDefault();
    if (inputState.trim()) {
      createTask(inputState);
    }
  }

  function pressEnter() {
    if (inputState.trim()) {
      createTask(inputState);
    }
  }

  return (
    <div className="inputBlock">
      <Input
        placeholder="Placeholder"
        fullWidth
        style={{ marginRight: "40px" }}
        value={inputState}
        onChange={(e) => setInputState(e.target.value)}
        onKeyPress={(e) => {
          if (e.key === "Enter") {
            pressEnter();
          }
        }}
      />
      <Button
        variant="contained"
        color="primary"
        type="submit"
        className="btn"
        onClick={inputSubmit}
      >
        Add
      </Button>
    </div>
  );
}
