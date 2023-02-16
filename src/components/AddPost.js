import { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import toastr from "toastr";
import "toastr/build/toastr.min.css";
import { v4 as uuid } from 'uuid';

function AddPost(props) {
    let currentDate = new Date();
    const [formValues, setFormValues] = useState({
        id: uuid(),
        author: "",
        date: currentDate.toLocaleString(),
        title: "",
        description: ""
    });

    toastr.options = {
        "closeButton": false,
        "debug": false,
        "newestOnTop": false,
        "progressBar": true,
        "positionClass": "toast-top-right",
        "preventDuplicates": false,
        "onclick": null,
        "showDuration": "300",
        "hideDuration": "1000",
        "timeOut": "5000",
        "extendedTimeOut": "1000",
        "showEasing": "swing",
        "hideEasing": "linear",
        "showMethod": "fadeIn",
        "hideMethod": "fadeOut"
    };

    const submitHandler = (event) => {
        event.preventDefault();
        props.submitedPosts({
            id: uuid(),
            // TODO: change to current user
            author: "Laith",
            date: currentDate.toLocaleString(),
            title: event.target.elements.title.value,
            description: event.target.elements.description.value,
            image: event.target.elements.image.value
        });
        // reset the form
        setFormValues({
            id: uuid(),
            author: "",
            date: currentDate.toLocaleString(),
            title: "",
            description: "",
            image: ""
        });
        toastr["success"]("Post added!", "Success");
    }

    return (
        <div>
            <Form onSubmit={(event) => submitHandler(event)}>
                <Form.Group controlId="postTitle">
                    <Form.Label>Title</Form.Label>
                    <Form.Control
                        name="title"
                        type="text"
                        placeholder="Post title"
                    />
                </Form.Group>
                <Form.Group controlId="postDescription">
                    <Form.Label>Description</Form.Label>
                    <Form.Control
                        name="description"
                        type="text"
                        placeholder="Post description"
                    />
                </Form.Group>
                <Form.Group controlId="postImage">
                    <Form.Label>Image</Form.Label>
                    <Form.Control
                        name="image"
                        type="text"
                        placeholder="Insert URL for image..."
                    />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    );
}
export default AddPost;