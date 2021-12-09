import axios from "axios";
import React, { useEffect, useState } from "react";
import API from "../Api";
import { useNavigate } from "react-router-dom";

function Home() {
  const [listPost, setListPost] = useState([]);
  let navigate = useNavigate();

  useEffect(() => {
    axios.get(API).then((response) => {
      setListPost(response.data);
      //console.log(response.data);
    });
  }, []);
  const likePost = (postId) => {
    axios.post(
      "http://localhost:3001/likes",
      { PostId: postId },
      { headers: { accessToken: localStorage.getItem("accessToken") } }
    ).then((response)=> {
      alert(response.data)
    })
  };
  return (
    <div className="App">
      {listPost.map((value, key) => {
        return (
          <div
            key={key}
            className="post"
          >
            <div className="title">{value.title}</div>
            <div className="body"
            onClick={() => {
              navigate(`/post/${value.id}`);
            }}
            >{value.postText}</div>
            <div className="footer">
              {value.userName}
              <button onClick={() => likePost(value.id)}>Like</button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Home;
