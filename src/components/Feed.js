import '../App.css';
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Post from "./Post";

function Feed(props) {
    console.log("Feed props:" + props.posts);
    const html =
        <Container>
            <Row>
                <Col lg={8}>
                    <Post props={props}/>
                </Col>
                <Col lg={4}></Col>
            </Row>
        </Container>
        ;

    return html;
}

export default Feed;