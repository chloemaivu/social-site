// npm i react-avatar


import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Avatar from 'react-avatar';








function Profile() {
    return (
        <Container>

            <Avatar size={200} round="100px" />
            <p><b>Date joined: </b> { }</p>
            <Button variant="primary" type="Change PFP">
                Change PFP
            </Button>


            <Form>
                <Form.Group className="mb-3" controlId="formGroupEmail">
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="email" placeholder="Enter username" />
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
