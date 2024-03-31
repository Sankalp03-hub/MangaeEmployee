import React, { useState, useEffect } from "react"; // useState=strore data & useeffect=use when change data
import axios from "axios";
import { Link } from "react-router-dom"; //when click on submit button

const Read = () => {
  const [data, setData] = useState([]);
  

  function getData() {
    axios.get("http://localhost:4000/users").then((res) => {
      console.log(res.data);
      setData(res.data);
    });
  }

  function handleDelete(id) {
    axios
      .delete(`http://localhost:4000/users/${id}`)
      .then(() => {
        getData();
      })
      .then(() => {
        getData();
      });
  }
  const setToLocalStrorage = (id, name, email) => {
    localStorage.setItem("id", id);
    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
    localStorage.setItem("age", age);
    localStorage.setItem("address", address);
  };

  useEffect(() => {
    getData();
  }, []); //when this data will change then

  return (
    <>
       <div className="d-flex justify-content-between">
        <h1>Read Operation</h1>
        <Link to="/">
        <button className="btn btn-sm btn-secondary">create Data</button>
        </Link>
        </div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Age</th>
            <th scope="col">Address</th>
            <th scope="col"></th>
            <th scope="col"></th>
          </tr>
        </thead>

        {data.map((eachData) => {
          return (
            <>
              <tbody>
                <tr>
                  <th scope="row">{eachData.id}</th>
                  <td>{eachData.name}</td>
                  <td>{eachData.email}</td>
                  <td>{eachData.age}</td>
                  <td>{eachData.address}</td>
                  <td>
                    <Link to="/update">
                      <button
                        className="btn btn-success"
                        onClick={() =>
                          setToLocalStrorage(
                            eachData.id,
                            eachData.name,
                            eachData.email,
                            eachData.age,
                            eachData.address
                          )
                        }
                      >
                        Edit
                      </button>
                    </Link>
                  </td>
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={() => handleDelete(eachData.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              </tbody>
            </>
          );
        })}
      </table>
    </>
  );
};

export default Read;
