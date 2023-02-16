import '../App.css';
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "bootstrap/dist/css/bootstrap.min.css";
import { MDBIcon } from 'mdb-react-ui-kit';

function Homepage(props) {
    //TODO: force image size
    const html =
        <Container>
            <Row>
                {props.posts.map((post) => (
                    <Col key={post.uuid} xs={12} md={4} lg={2}>
                        <Card>
                        <div className="cardSquare">
                            <Card.Img id="postImage" variant="top" src={post.image} />
                        </div>
                        <div>
                            <Row>
                                <Col lg={6}>
                                    <Card.Title id="postAuthor">{post.author}</Card.Title>
                                </Col>
                                <Col lg={6}>
                                    <MDBIcon far icon="heart" /> <span></span>
                                </Col>
                            </Row>
                        </div>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
        ;
    
    return html;
}

export default Homepage;