import React from "react";
import { Alert } from "reactstrap";

const ErrorPage = () => {
  return (
    <div
      className="d-flex justify-content-center align-items-center text-center"
      style={{
        height: "100vh",
      }}
    >
      <Alert className="text-center" color="danger">
        ERROR PAGE NOT FOUND!
      </Alert>
    </div>
  );
};

export default ErrorPage;
