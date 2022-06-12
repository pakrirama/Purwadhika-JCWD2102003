import React from "react";
import { Card, CardBody, CardTitle, Button, CardText, Input } from "reactstrap";
import moment from "moment";
import { useState } from "react";

export const ToDoList = (props) => {
  const data = [
    {
      tgl: new Date(),
      action: "Membuat Database",
      status: true,
    },
    {
      tgl: new Date(),
      action: "Menganalisa Data",
      status: false,
    },
    {
      tgl: new Date(),
      action: "Membuat Wireframe",
      status: true,
    },
    {
      tgl: new Date(),
      action: "Membuat UI/UX",
      status: false,
    },
  ];

  const [todoList, setToDoList] = useState(data);

  const [inputValues, setInputValues] = useState({
    todoInput: "",
    dateInput: new Date(),
  });

  const inputHandler = (event) => {
    const { value, name } = event.target;
    // console.log(value);
    // console.log(name);

    setInputValues({
      ...inputValues,
      [name]: value,
    });
  };

  const addTodoItem = () => {
    const newTodoArray = [...todoList];
    console.log(newTodoArray);
    newTodoArray.unshift({
      tgl: inputValues.dateInput,
      action: inputValues.todoInput,
      status: false,
    });

    setToDoList(newTodoArray);
    setInputValues({ todoInput: "", dateInput: new Date() });
  };

  const deleteTodoItem = (index) => {
    const deleteTodoArray = [...todoList];
    deleteTodoArray.splice(index, 1);
    console.log(todoList);
    setToDoList(deleteTodoArray);
  };

  const toggleTodoStatus = (index) => {
    const duplicateTodoArray = [...todoList];
    duplicateTodoArray[index].status = !duplicateTodoArray[index].status;

    setToDoList(duplicateTodoArray);
  };

  return (
    <>
      <div className="mb-5">
        <div className="row mt-3 mx-2">
          <div className="offset-3 col-5">
            <Input
              name="todoInput"
              onChange={inputHandler}
              value={inputValues.todoInput}
              placeholder="Activity"
            ></Input>
            <Input
              name="dateInput"
              onChange={inputHandler}
              type="date"
              value={inputValues.dateInput}
            ></Input>
          </div>
          <div className="col-2">
            <Button onClick={addTodoItem} color="success">
              {" "}
              Add To do
            </Button>
          </div>
        </div>
      </div>

      {todoList.map((val, idx) => {
        return (
          <div key={idx}>
            <Card className=" container offset-3 col-5 ">
              <CardBody className="d-flex justify-content-between col-9">
                <div className="col-11">
                  <CardTitle className="fw-bold">
                    {" "}
                    {moment(val.tgl).format("DD MMMM YYYY")}
                  </CardTitle>
                  <CardText>{val.action}</CardText>
                </div>

                {/* {myStatus ?  */}
                {val.status ? (
                  <Button
                    onClick={toggleTodoStatus(idx)}
                    color="success"
                    className="btn-sm m-2 col-3"
                  >
                    Done
                  </Button>
                ) : (
                  <Button
                    onClick={toggleTodoStatus(idx)}
                    color="warning"
                    className="btn-sm m-2 col-3"
                  >
                    Ongoing
                  </Button>
                )}
                <Button
                  onClick={deleteTodoItem(idx)}
                  color="danger"
                  className=" m-2 fa fa-trash-alt"
                >
                  {/* Delete */}
                </Button>
              </CardBody>
            </Card>
          </div>
        );
      })}
    </>
  );
};

export default ToDoList;
