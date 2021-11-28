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

  return (
    <div className="App">
      {listPost.map((value, key) => {
        return (
          <div
          key={key}
            className="post"
            onClick={() => {
              navigate(`/post/${value.id}`);
            }}
          >
            <div className="title">{value.title}</div>
            <div className="body">{value.postText}</div>
            <div className="footer">{value.userName}</div>
          </div>
        );
      })}
    </div>
  );
}

export default Home;
