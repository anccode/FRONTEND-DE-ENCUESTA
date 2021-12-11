import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUp";
import { AuthContext } from "../helpers/AuthContext";

function Profile() {
  let navigate = useNavigate();
  let { id } = useParams();
  const [username, setUsername] = useState("");
  const [listOfPosts, setListOfPosts] = useState();
  const { authState } = useContext(AuthContext);

  useEffect(
    () => {
      axios
        .get(`http://localhost:3001/auth/basicinfo/${id}`)
        .then((response) => {
          setUsername(response.data.username);
        });
    },

    axios.get(`http://localhost:3001/posts/byuserid/${id}`).then((response) => {
      setListOfPosts(response.data);
    }),
    []
  );

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
    <div className="profilePageContainer">
      <div className="profilebasicInfo">
        <h1>Username: {username}</h1>{" "}
        {authState.username === username && (
          <button onClick={()=>{
            navigate("/changepassword")
          }} className=""> cambiar mi contraseña</button>
        )}
      </div>
      <div className="listOfPost">
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
                {value.posttext}
              </div>
              <div className="footer">
                <div className="username">{value.username}</div>
                <div className="buttons">
                  <ThumbUpAltIcon
                    onClick={() => {
                      likePost(value.id);
                    }}
                  />
                  <label>{value.Likes.length}</label>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Profile;
