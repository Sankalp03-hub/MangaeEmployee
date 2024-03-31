import React, { useEffect, useState } from "react";
import axios from "axios"; //it provide package to get req & send res form server
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom"; //when click on submit button


const Update = () => {
  const [id, setId] = useState(0);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [address, setAddress] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    setId(localStorage.getItem("id"));
    setName(localStorage.getItem("name"));
    setEmail(localStorage.getItem("email"));
    setName(localStorage.getItem("age"));
    setEmail(localStorage.getItem("address"));
  }, []);

  const handleUpdate = (e) => {
    e.preventDefault();
    console.log("Id...", id);
    axios
      .put(`http://localhost:4000/users/${id}`, {
        name: name,
        email: email,
        age: age,
        address:"address"
      })
      .then(() => {
        navigate("/read");
      });
  };

  return (
    <>
      <form>
        <h1>Update</h1>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Email address</label>
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Age</label>
          <input
            type="text"
            className="form-control"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Address</label>
          <input
            type="text"
            className="form-control"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>

        {/* {name}
        {email} */}

        <button
          type="submit"
          className="btn btn-success"
          onClick={handleUpdate}
        >
          Update
        </button>
        <Link to ="/read" >
        <button  className="btn btn-secondary mx-2">
          Back
        </button>
        </Link>
      </form>
    </>
  );
};

export default Update;
