import { useState } from "react";
import { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import { Nav, Navbar } from "react-bootstrap";
import "./App.css";
import Posts from "./components/Posts";
import AddPost from "./components/AddPost";
import Post from "./components/Post";
import { Routes, Route, Link } from "react-router-dom";

function App() {
  const [listItems, setListItems] = useState([]);
  const updateListItems = (todoItem) => {
    // JSON
    localStorage.setItem("posts", JSON.stringify([...listItems, todoItem]));

    setListItems([...listItems, todoItem]);
  };

  useEffect(() => {
    const listContents = localStorage.getItem("posts");
      setListItems(JSON.parse(listContents) || []);
  }, []);

  return (
    <Container>
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Link className="text-col" to="/">Home</Link>
            <Link className="text-col" to="/add-post">Add Post</Link>
          </Nav>
        </Container>
      </Navbar>
      <Routes>
        {/* TODO: root url? homepage? */}
        {/* <Route exact path="/" element={/>} /> */}
        <Route path="/add-post" element={<AddPost submitedPosts={(posts) => updateListItems(posts)} />} />
        <Route exact path="/posts" element={<Posts todos={listItems} />} />
        <Route path="/post/:id" element={<Post />} />
      </Routes>
    </Container>
  );
}
export default App;