import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Container from "react-bootstrap/Container";
import NavigationBar from "./components/NavigationBar";
import Homepage from "./components/Homepage";
import AddPost from "./components/AddPost";
import Post from "./components/Post";
import Feed from "./components/Feed";
import { faker } from '@faker-js/faker';

function App() {
  const [posts, setPosts] = useState([]);
  const [users, setUsers] = useState([]);

  const updatePosts = (newPost) => {
    setPosts([...posts, newPost]);
  };

  useEffect(() => {
    const postsFromLocalStorage = JSON.parse(localStorage.getItem("posts")) || [];
    const usersFromLocalStorage = JSON.parse(localStorage.getItem("users")) || [];

    setPosts(postsFromLocalStorage);
    setUsers(usersFromLocalStorage);
  }, []);

  useEffect(() => {
    localStorage.setItem("posts", JSON.stringify(posts));
  }, [posts]);

  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);

  useEffect(() => {
    // Generate 10 fake users
    const fakeUsers = [...Array(10)].map(() => ({
      id: uuidv4(),
      username: faker.internet.userName(),
      dateJoined: faker.date.past().toISOString(),
    }));

    setUsers(fakeUsers);
  }, []);

  useEffect(() => {
    const fakePosts = users.map((user) => {
      return [...Array(3)].map(() => ({
        id: uuidv4(),
        authorId: user.id,
        date: faker.date.past().toISOString(),
        title: faker.lorem.sentence(10),
        description: faker.lorem.words(15),
        image: faker.image.abstract(500, 500, true)
      }));
    }).flat();

    setPosts(fakePosts);
  }, [users]);

  return (
    <Container>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Homepage posts={posts} users={users} />} />
        <Route path="/feed" element={<Feed posts={posts} users={users} />} />
        <Route path="/add-post" element={<AddPost submittedPosts={(posts) => updatePosts(posts)} />} />
        <Route path="/profile" element={"Profile"} />
        <Route path="/post/:id" element={<Post posts={posts} />} />
      </Routes>
    </Container>
  );
}

export default App;