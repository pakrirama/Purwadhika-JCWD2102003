import { React, useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import member from "../../../../Assets/img/img_bandmember.jpeg";

function BandMember() {
  const [memberList, setMemberList] = useState([]);

  const fetchData = () => {
    axios
      .get(`http://localhost:3333/bandMember`)
      .then((res) => {
        setMemberList(res.data);
        console.log(memberList);
      })
      .catch((err) => {
        console.log("Gagal fetch data");
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div id="members" className="container py-4 text-center">
        <h1 className="my-4">Band Members</h1>
        <div className="card-group">
          {memberList.map((val) => {
            return (
              <div className="card-body" key={val.id}>
                <Link to={`/member/${val.id}`}>
                  <img className="rounded" src={member} alt="Name1" />
                  <p>{val.name}</p>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default BandMember;
