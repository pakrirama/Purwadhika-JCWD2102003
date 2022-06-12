// import member from "../Assets/img/img_bandmember.jpeg";
import Member from "./Member";

function BandMember() {
  return (
    <div id="members" className="container py-4 text-center">
      <h1 className="my-4">Band Members</h1>
      <div className="card-group">
        <Member />
        <Member />
        <Member />
      </div>
    </div>
  );
}

export default BandMember;
