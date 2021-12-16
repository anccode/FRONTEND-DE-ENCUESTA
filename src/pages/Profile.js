import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUp";
import { AuthContext } from "../helpers/AuthContext";

function Profile() {
  let { id } = useParams();
  let navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [correo, setCorreo] = useState("");
  const [peso, setPeso] = useState("");
  const [estatura, setEstatura] = useState("");
  const [listOfPosts, setListOfPosts] = useState([]);
  const { authState } = useContext(AuthContext);

  useEffect(() => {
    axios.get(`http://localhost:3001/auth/basicinfo/${id}`).then((response) => {
      setUsername(response.data.username);
      setCorreo(response.data.correo);
      setPeso(response.data.peso);
      setEstatura(response.data.estatura);
    });

    axios.get(`http://localhost:3001/posts/byuserId/${id}`).then((response) => {
      setListOfPosts(response.data);
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
    <div className="profilePageContainer">
    <div className="basicInfo">
      {" "}
      <h1> Usuario: {username} </h1>
      <h1> Correo: {correo} </h1>
      <h1> Peso: {peso} </h1>
      <h1> Talla: {estatura} </h1>
      {authState.correo === correo && (
        <button
          onClick={() => {
            navigate("/changepassword");
          }}
        >
          {" "}
          Change My Password
        </button>
      )}
    </div>
    <div className="listOfPosts">
      {listOfPosts.map((value, key) => {
        return (
          <div key={key} className="post">
            <div className="title"> {value.title} </div>
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
              <ThumbUpAltIcon
                  onClick={() => {
                    likePost(value.id);
                  }}                  
                />
              <div className="buttons">
                <label> {value.Likes.length}</label>
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