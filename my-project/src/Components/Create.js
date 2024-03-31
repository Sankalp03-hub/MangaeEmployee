import React, { useState } from "react";
import axios from "axios"; //it provide package to get req & send res form server
import { useNavigate } from "react-router-dom"; //when click on submit button
import { Link } from "react-router-dom"; //when click on submit button

const Create = () => {
  const [name, setName] = useState(""); // take data by "setName" and store into "name".
  const [email, setEmail] = useState("");
  const history = useNavigate();

  const header = { "Access-control-allow-origin": "*" };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("clicked");
    axios.post("http://localhost:8000/users", {
      name: name,
      email: email,
      header
    })
    .then(()=>{
        history("/read"); //after submit clicked we should be on read page

    })
  };

  return (
    <>
      <div className="d-flex justify-content-between">
        <h1>Create</h1>
        <Link to="/read">
        <button className="btn btn-sm btn-primary">Show Data</button>
        </Link>
        </div>
      <form>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Email address</label>
          <input
            type="email"
            className="form-control"
            aria-describedby="emailHelp"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        {/* {name}
        {email} */}

        <button
          type="submit"
          className="btn btn-primary"
          onClick={handleSubmit}
        >
          Add Data
        </button>
      </form>
    </>
  );
};

export default Create;


