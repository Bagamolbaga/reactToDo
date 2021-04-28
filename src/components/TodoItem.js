import React, { useContext } from "react";
import Context from "../context";

import "./styleComponents/TodoItem.css";

import Chip from "@material-ui/core/Chip";
import Avatar from "@material-ui/core/Avatar";
import Input from "@material-ui/core/Input";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Button from "@material-ui/core/Button";

export default function TodoItem({ todo }) {
  const { todoCompleted, todoDelete, addRemDesc, createDescTask } = useContext(
    Context
  );

  let [inputDescState, setInputDescState] = React.useState("");

  function pressEnter() {
    if (inputDescState.trim()) {
      createDescTask(todo.id, inputDescState);
    }
  }

  let inputOrDesc;
  if (todo.descShow && todo.description === null) {
    inputOrDesc = (
      <>
        <Input
          value={inputDescState}
          placeholder="Description"
          onChange={(e) => setInputDescState(e.target.value)}
          onKeyPress={(e) => {
            e.key === "Enter" && pressEnter();
          }}
        />

        <Button color="primary" onClick={pressEnter}>
          ADD
        </Button>
      </>
    );
  } else if (todo.descShow && todo.description !== null) {
    inputOrDesc = todo.description;
  }

  return (
    <React.Fragment>
      <div className={"todoitem"}>
        <>
          <Chip
            color={todo.completed ? "primary" : "default"}
            avatar={<Avatar>{todo.id}</Avatar>}
            label={todo.taskName}
          />
        </>
        <>
          <ButtonGroup variant="text" size="small">
            <Button onClick={() => addRemDesc(todo.id)}>DESC</Button>
            <Button color="primary" onClick={() => todoCompleted(todo.id)}>
              OK
            </Button>
            <Button color="secondary" onClick={() => todoDelete(todo.id)}>
              DELETE
            </Button>
          </ButtonGroup>
        </>
      </div>
      <div className="desc">
        <p>{inputOrDesc}</p>
      </div>
    </React.Fragment>
  );
}
