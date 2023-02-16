import { useState } from "react";
import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Container from "react-bootstrap/Container";
import NavigationBar from "./components/NavigationBar";
import Homepage from "./components/Homepage";
import AddPost from "./components/AddPost";
import Post from "./components/Post";
import Feed from "./components/Feed";

function App() {
  const [listItems, setListItems] = useState([]);
  const updateListItems = (itemToStore) => {
    localStorage.setItem("posts", JSON.stringify([...listItems, itemToStore]));
    setListItems([...listItems, itemToStore]);
  };

  useEffect(() => {
    const listContents = localStorage.getItem("posts");
      setListItems(JSON.parse(listContents) || []);
  }, []);

  return (
    <Container>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Homepage posts={listItems} />} />
        <Route path="/feed" element={<Feed posts={JSON.parse(localStorage.getItem("posts"))} />} />
        <Route path="/add-post" element={<AddPost submitedPosts={(posts) => updateListItems(posts)} />} />
        <Route path="/profile" element={"Profile"} />
        <Route path="/post/:id" element={<Post posts={listItems}/>} />
      </Routes>
    </Container>
  );
}
export default App;