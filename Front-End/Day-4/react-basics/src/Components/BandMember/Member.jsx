import React from "react";
import member from "../../Assets/img/img_bandmember.jpeg";

export const Member = () => {
  return (
    <div className="card-body">
      <img className="rounded" src={member} alt="Name1" />
      <p>Name</p>
    </div>
  );
};

export default Member;
