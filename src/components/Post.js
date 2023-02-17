import Card from 'react-bootstrap/Card';
import '../App.css';
import { MDBIcon } from 'mdb-react-ui-kit';

function Post(props) {
    const post = props.post;
    const author = props.author;

    return (
        <Card>
            <div key={post.id} className="cardSquare">
                <Card.Title id="postAuthor">{author.username}</Card.Title>
                <Card.Img id="postImage" variant="top" src={post.image} />
            </div>
            <div>
                <MDBIcon far icon="comment-alt" />
                <MDBIcon far icon="share-square" />
                <MDBIcon far icon="heart" /> <span>Likes number</span>
            </div>
            {/* CSS align to right of image */}
            <p id="postTitle">{post.title}</p>
            <span id="postDescription">
                {post.description ? post.description : "No description for this post!"}
            </span>
            <p id="postDate">{post.date}</p>
        </Card>
    );
}

export default Post;