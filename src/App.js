import { useState } from "react";
import { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import { Nav, Navbar } from "react-bootstrap";
import "./App.css";
import Post from "./components/Post";
import AddPost from "./components/AddPost";
import { Routes, Route, Link } from "react-router-dom";

function App() {
  const [listItems, setListItems] = useState([]);
  const updateListItems = (todoItem) => {
    // JSON
    localStorage.setItem("list", JSON.stringify([...listItems, todoItem]));

    setListItems([...listItems, todoItem]);
  };

  useEffect(() => {
    const listContents = localStorage.getItem("list");
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
        <Route exact path="/post" element={<Post todos={listItems} />} />
        <Route path="/add-post" element={<AddPost subbmitedPosts={(posts) => updateListItems(posts)} />}
      />
      </Routes>
    </Container>
  );
}
export default App;