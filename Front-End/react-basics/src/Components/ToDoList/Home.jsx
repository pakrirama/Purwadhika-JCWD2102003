import React, { useEffect } from "react";
import ToDoList from "./ToDoList";
import { Button, Input, Spinner, Alert } from "reactstrap";
import { useState } from "react";
import axios from "axios";

const Home = () => {
  const [todoList, setToDoList] = useState([]);
  const [isLoading, setIsloading] = useState(true);
  const [serverError, setServerError] = useState(false);
  const [inputValues, setInputValues] = useState({
    todoInput: "",
    dateInput: new Date(),
  });

  const fetchData = () => {
    setTimeout(() => {
      axios
        .get(`http://localhost:3333/todos`)
        .then((res) => {
          setToDoList(res.data);
        })
        .catch((err) => {
          console.log("Gagal fetch data");
          console.log(err);
          setServerError(true);
        })
        .finally(() => {
          setIsloading(false);
        });
    }, 2000);
  };

  const inputHandler = (event) => {
    const { value, name } = event.target;
    setInputValues({
      ...inputValues,
      [name]: value,
    });
  };

  const addTodoItem = () => {
    const newData = {
      tgl: inputValues.dateInput,
      action: inputValues.todoInput,
      status: false,
    };

    axios.post(`http://localhost:3333/todos`, newData).then(() => {
      fetchData();
    });
    setInputValues({ todoInput: "", dateInput: new Date() });
  };

  const deleteTodoItem = (id) => {
    axios.delete(`http://localhost:3333/todos/${id}`).then(() => {
      fetchData();
    });
  };

  const toggleTodoStatus = (id) => {
    // let newStatus
    const todo = todoList.find((val) => {
      return val.id === id;
    });
    axios
      .patch(`http://localhost:3333/todos/` + id, { status: !todo.status })
      .then(() => {
        fetchData();
      });
  };

  useEffect(() => {
    // console.log("Did Mount");
    fetchData();
  }, []);

  useEffect(() => {
    return () => {
      console.log("Un Mount");
    };
  }, []);

  useEffect(() => {
    console.log("Did Update");
  }, [todoList]);

  return (
    <div>
      {isLoading ? (
        <div className="container d-flex justify-content-center">
          <Spinner />
        </div>
      ) : null}
      {serverError ? (
        <Alert color="danger" className="d-flex justify-content-center">
          Server Error
        </Alert>
      ) : (
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
                {/* <Button onClick={fetchData} color="info">
              {" "}
              FetchData
            </Button> */}
              </div>
            </div>
          </div>
          {todoList.map((val, idx) => {
            return (
              <div key={idx}>
                <ToDoList
                  tgl={val.tgl}
                  action={val.action}
                  status={val.status}
                  number={idx + 1}
                  deleteItem={() => deleteTodoItem(val.id)}
                  toggleStatus={() => toggleTodoStatus(val.id)}
                />
              </div>
            );
          })}
        </>
      )}
    </div>
  );
};

export default Home;
