import React from "react";
import { Card, CardBody, CardTitle, Button, CardText } from "reactstrap";
import moment from "moment";

export const ToDoList = (props) => {
  // const [myStatus, setMyStatus] = useState(props.status);
  // function changeStatus() {
  //   myStatus ? setMyStatus(false) : setMyStatus(true);
  // }

  return (
    <>
      <Card className=" container offset-3 col-5 ">
        <CardBody className="d-flex justify-content-between col-9">
          <div className="col-11">
            <CardTitle className="fw-bold">
              {" "}
              {moment(props.tgl).format("DD MMMM YYYY")}
            </CardTitle>
            <CardText>{props.action}</CardText>
          </div>

          {/* {myStatus ?  */}
          {props.status ? (
            <Button
              onClick={props.toggleStatus}
              color="success"
              className="btn-sm m-2 col-3"
            >
              Done
            </Button>
          ) : (
            <Button
              onClick={props.toggleStatus}
              color="warning"
              className="btn-sm m-2 col-3"
            >
              Ongoing
            </Button>
          )}
          <Button
            onClick={props.deleteStatus}
            color="danger"
            className=" m-2 fa fa-trash-alt"
          >
            {/* Delete */}
          </Button>
        </CardBody>
      </Card>
    </>
  );
};

export default ToDoList;
