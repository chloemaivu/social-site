import '../App.css';
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Post from "./Post";
import UserSidebar from "./UserSidebar";

function Feed(props) {
    const posts = props.posts;
    const users = props.users;

    const renderedPosts = posts.map((post) => {
        const author = users.find((user) => user.id === post.authorId);
        return (
            <Col key={post.id} lg={8}>
                <Post post={post} author={author} />
            </Col>
        );
    });

    const renderedUsers = users.map((user) => {
        return (
            <UserSidebar key={user.id} user={user} />
        );
    });

    return (
        <Container>
            <Row>
                {renderedPosts}
                <Col lg={4}>
                    <h3>Users</h3>
                    {renderedUsers}
                </Col>
            </Row>
        </Container>
    );
}

export default Feed;
