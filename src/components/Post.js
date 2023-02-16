import Card from 'react-bootstrap/Card';
import '../App.css';
import { MDBIcon } from 'mdb-react-ui-kit';
import { useParams } from "react-router-dom";

function Post(props) {
    console.log(props);
    // const { id } = useParams();
    // const post = JSON.parse(localStorage.getItem("posts")).find(
    //     (post) => post.id === id
    // );

    return (
        <Card>
            <div key={props.posts.uuid} className="cardSquare">
                <Card.Title id="postAuthor">{props.posts.author}</Card.Title>
                <Card.Img id="postImage" variant="top" src={props.posts.image} />
            </div>
            <div>
                <MDBIcon far icon="comment-alt" />
                <MDBIcon far icon="share-square" />
                <MDBIcon far icon="heart" /> <span>Likes number</span>
            </div>
            {/* CSS align to right of image */}
            <p id="postTitle">{props.posts.title}</p>
            <span id="postDescription">
                {props.posts.description ? props.posts.description : "No description for this post!"}
            </span>
            <p id="postDate">{props.posts.date}</p>
        </Card>
    );
}

export default Post;