import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import Users from "./Users";

function Posts() {
  const [posts, setPost] = useState([]);
  const [isError, setIsError] = useState("");
  const getApiData = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        setPost(res.data);
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
      <div className="maindiv">
        <div className="posts">
          <h1 className="post">Posts</h1>
          <div className="homelink">
            <span>users/</span> <Link to="/users">Home</Link>
          </div>
        </div>
        {posts.map((post)=>
         (
            <div className="card">
            <div className="num">
              <h2>{post.id}</h2>
            </div>
            <div className="jerry">
              
              <h3>{post.title}</h3>
              <p>{post.body}</p>
              <br />
            </div>
            <div></div>
          </div>
         )
     )}
      </div>
    </>
  );
}
export default Posts;
