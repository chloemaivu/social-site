import "../App.css";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "bootstrap/dist/css/bootstrap.min.css";
import { MDBIcon } from "mdb-react-ui-kit";

function Homepage(props) {
    const posts = props.posts;
    const users = props.users;

    const renderedPosts = posts.map((post) => {
        const author = users.find((user) => user.id === post.authorId);
        return (
            <Col key={post.id} xs={12} md={4} lg={2}>
                <Card>
                    <div className="cardSquare">
                        <Card.Img id="postImage" variant="top" src={post.image} />
                    </div>
                    <div>
                        <Row>
                            <Col lg={6}>
                                <Card.Title id="postAuthor">{author.username}</Card.Title>
                            </Col>
                            <Col lg={6}>
                                <MDBIcon far icon="heart" /> <span></span>
                            </Col>
                        </Row>
                    </div>
                </Card>
            </Col>
        );
    });

    return (
        <Container>
            <Row>{renderedPosts}</Row>
        </Container>
    );
}

export default Homepage;