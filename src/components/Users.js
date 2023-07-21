import React from "react";
import user from "../image/user.png";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Users() {
  const [users, setUsers] = useState([]);
  const [isError, setIsError] = useState("");

  const getApiData = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        console.log("res", res.data);
        setUsers(res.data);  
      })
      .catch((err) => {
        setIsError("Something went wrong", err);
      });
  };
  useEffect(() => {
    getApiData();
  }, []);
  return (
    <>
      <div className="grand_parent">
        <div className="inner-container">
          <h1>Users</h1>
         
          <Link to="/posts"> <button className="btn">Posts</button></Link>
        </div>
        <div className="outer">
          {users.map((usr) => (
            <div className="parent">
              <div className="child">
                <img src={user} alt="" />
                <div>
                  <h4>{usr.name}</h4>
                  <p>{usr.email}</p>
                  <hr />
                  <h4>{usr.address.city}</h4>
                  <h4>{usr.website}</h4>
                  <h4>{usr.phone}</h4>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
export default Users;
