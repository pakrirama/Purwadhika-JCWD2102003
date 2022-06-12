import React from "react";
import map from "../../../Assets/img/map.jpeg";

export const Contact = () => {
  return (
    <div id="contact" className="container py-4">
      <div className="text-center py-4">
        <h2>C O N T A C T</h2>
        Chicago, US
        <br />
        Phone: +00 151515
        <br />
        Email: mail@mail.com
        <br />
        <p>
          <i>Fan? Drop a note!</i>
        </p>
      </div>
      <form action="action_page.html" target="_blank" className="container">
        <input
          className="input-group my-2"
          type="text"
          placeholder="Name"
          required
          name="Name"
        />
        <input
          className="input-group my-2"
          type="text"
          placeholder="Email"
          required
          name="Email"
        />
        <input
          className="input-group my-2"
          type="text"
          placeholder="Message"
          required
          name="Message"
        />
        <br />
        <div className="d-flex justify-content-center">
          <button className="btn btn-dark" type="submit">
            SEND
          </button>
        </div>
      </form>
      <div className="m-4">
        <img
          src={map}
          className="w3-image"
          style={{ width: "100%" }}
          alt="map"
        />
      </div>
    </div>
  );
};

export default Contact;
