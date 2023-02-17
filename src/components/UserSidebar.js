import ListGroup from 'react-bootstrap/ListGroup';
import '../App.css';

function UserSidebar(props) {
    const user = props.user;

    return (
        <ListGroup className="userSidebar">
            <ListGroup.Item>{user.username}</ListGroup.Item>
            <ListGroup.Item>{user.dateJoined}</ListGroup.Item>
        </ListGroup>
    );
}

export default UserSidebar;