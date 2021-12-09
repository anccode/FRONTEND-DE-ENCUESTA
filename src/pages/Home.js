import axios from "axios";
import React, { useEffect, useState } from "react";
//import API from "../Api";
import { useNavigate } from "react-router-dom";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUp";

function Home() {
  const [listOfPosts, setListOfPosts ] = useState([]);
  const [likedPosts, setLikedPosts] = useState([]);
  let navigate = useNavigate();

  useEffect(() => {
    axios.get("http://localhost:3001/posts",
      { headers: { accessToken: localStorage.getItem("accessToken") } },
      ).then((response) => {
        setListOfPosts(response.data.listOfPosts);
      //console.log(response.data);
    });
  }, []);
  const likePost = (postId) => {
    axios
      .post(
        "http://localhost:3001/likes",
        { PostId: postId },
        { headers: { accessToken: localStorage.getItem("accessToken") } }
      )
      .then((response) => {
        //alert(response.data);
        setListOfPosts(
          listOfPosts.map((post) => {
            if (post.id === postId) {
              if (response.data.liked) {
                return { ...post, Likes: [...post.Likes, 0] };
              } else {
                const likesArray = post.Likes;
                likesArray.pop();
                return { ...post, Likes: likesArray };
              }
            } else {
              return post;
            }
          })
        );
      });
  };
  return (
    <div>
      {listOfPosts.map((value, key) => {
        return (
          <div key={key} className="post">
            <div className="title">{value.title}</div>
            <div
              className="body"
              onClick={() => {
                navigate(`/post/${value.id}`);
              }}
            >
              {value.postText}
            </div>
            <div className="footer">
              <div className="username">{value.username}</div>
              <div className="buttons">
              <ThumbUpAltIcon onClick={() => {likePost(value.id)}}/>
              <label>{value.Likes.length}</label>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Home;
