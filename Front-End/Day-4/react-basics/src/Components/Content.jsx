import React from "react";
import imgla from "../Assets/img/img_la.jpeg";

function Content() {
  return (
    <div
      id="home"
      className="d-flex justify-content-center align-items-end text-white"
      style={{
        backgroundImage: `url(${imgla})`,
        height: "100vh",
        backgroundSize: "100% 100%",
      }}
    >
      {/* <img src={imgla} alt="" /> */}
      <div className="flex text-center">
        <h3>Lenteng Agung</h3>
        <p>Band kami bukan kaleng-kaleng</p>
      </div>
    </div>
  );
}

export default Content;
