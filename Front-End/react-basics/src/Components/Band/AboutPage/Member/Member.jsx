import axios from "axios";
import { React, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import memberPic from "../../../../Assets/img/img_bandmember.jpeg";

export const Member = () => {
  const params = useParams();
  const [member, setMember] = useState({});

  const fetchData = () => {
    axios
      .get(`http://localhost:3333/bandMember/${params.id}`)
      .then((res) => {
        setMember(res.data);
      })
      .catch((err) => {
        console.log("Gagal fetch member");
      });
  };

  useEffect(() => {
    fetchData();
    // console.log("fetch");
  }, []);

  return (
    <div id="members" className="container py-4 text-center">
      <h1 className="my-4">Band Members</h1>
      <div className="card-group">
        <div className="card-body">
          <img className="rounded" src={memberPic} alt="Name1" />
          <p>
            Name : <strong>{member.name}</strong>
          </p>
          <p>
            Instrument : <strong>{member.instrument}</strong>
          </p>
          <p>
            Datebirth : <strong>{member.datebirth}</strong>
          </p>
          <p>
            Hobby : <strong>{member.hobby}</strong>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Member;
