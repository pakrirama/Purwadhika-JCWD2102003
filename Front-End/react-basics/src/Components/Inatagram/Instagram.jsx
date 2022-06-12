import React from "react";
import {
  Button,
  Card,
  CardTitle,
  CardSubtitle,
  CardBody,
  CardText,
} from "reactstrap";

export const Instagram = (props) => {
  let numberOfLikes = props.like;
  let caption = props.caption;
  let username = props.username;
  let location = props.location;
  let image = props.image;

  function likePost(amount) {
    numberOfLikes += 1;
    alert(`Liked Post ${numberOfLikes}`);
  }

  return (
    <>
      <div className="col-6 offset-3 p-3">
        <Card className="mt-4">
          <CardBody>
            <CardTitle tag="h5">{username}</CardTitle>
            <CardSubtitle className="text-muted mb-4">{location}</CardSubtitle>
            <img
              style={{ width: "100%" }}
              className="rounded"
              src={`${image}`}
              alt="350Z"
            />
            <CardText>
              {numberOfLikes.toLocaleString()} likes <br />
              <span className="fw-bold">{username}</span>{" "}
              {caption.length > 140 ? caption.slice(0, 140) + "..." : caption}
            </CardText>
            <Button color="danger" onClick={() => likePost()}>
              like &nbsp;&nbsp;
              <i class="fa fa-thumbs-up"></i>
            </Button>
          </CardBody>
        </Card>
      </div>
    </>
  );
};

export default Instagram;

//   {
/* <div className="card">
          <div className="card-body">
            <div className="card-title">
              <h5>{username}</h5>
            </div>
            <div className="card-subtitle text-muted mb-4"> {location}</div>
            <img
              style={{ width: "100%" }}
              className="rounded"
              src={`https://picsum.photos/id/123/1200/600`}
              alt="350Z"
            />

            <div className="card-text mt-3 pe-5">
              {numberOfLikes.toLocaleString()} likes
            </div>

            <div className="card-text mt-3 mb-4">
              <span className="fw-bold">{username}</span>{" "}
              {caption.length > 140 ? caption.slice(0, 140) + "..." : caption}
            </div>

            <button
              onClick={() => likePost(13)}
              type="button"
              className="btn btn-danger d-flex justify-content-center align-items-center"
            >
              like &nbsp;&nbsp;
              <i class="fa fa-thumbs-up"></i>
            </button>
          </div>
        </div> */
//   }
