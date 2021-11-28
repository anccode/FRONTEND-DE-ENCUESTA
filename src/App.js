import "./App.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./pages/Home";
import CreatePost from "./pages/CreatePost";
import Post from "./pages/Post";
import Login from "./pages/Login";
import Registration from "./pages/Registration";


function App() {
  return (
    <div className="App">
      <Router>
        <div className="navbar">
          <Link to="/">Home Page</Link>
          <Link to="/createpost">Create A post</Link>
          <Link to="/login">LOGIN</Link>
          <Link to="/registration">signUP</Link>
        </div>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/createpost" exact element={<CreatePost />} />
          <Route path="/post/:id" exact element={< Post/>} />
          <Route path="/login" exact element={< Login/>} />
          <Route path="/registration" exact element={< Registration/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
