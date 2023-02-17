import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Avatar from 'react-avatar';

function Profile() {
    const users = JSON.parse(localStorage.getItem('users'));
    const randomUser = users[Math.floor(Math.random() * users.length)];

    return (
        <Container>
            <Avatar src={randomUser.image} />
            <p><b>Date joined: </b> {randomUser.dateJoined}</p>
            <Button variant="primary" type="Change PFP">
                Change PFP
            </Button>
            <Form>
                <Form.Group className="mb-3" controlId="formGroupEmail">
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="email" placeholder={randomUser.username} />
                </Form.Group>
                <Button variant="primary" type="edit">
                    Edit
                </Button>
                <Form.Group className="mb-3" controlId="formGroupPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Button variant="primary" type="edit">
                    Edit
                </Button>
            </Form >
        </Container>
    );
}

export default Profile;