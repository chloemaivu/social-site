import { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import toastr from "toastr";
import "toastr/build/toastr.min.css";
import { v4 as uuid } from 'uuid';

function AddPost(props) {
    const [formValues, setFormValues] = useState({
        id: uuid(),
        author: "",
        //TODO: use current time
        // date: new Date().now(),
        date: "15:36 15/02/2023",
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
        props.subbmitedPosts({
            id: uuid(),
            author: "",
            //TODO: use current time
            // date: new Date().now(),
            date: "15:36 15/02/2023",
            title: "",
            description: ""
        });
        // reset the form
        setFormValues({
            id: 0,
            //TODO: get current user name
            author: "Laith",
            //TODO: use current time
            // date: new Date().now(),
            date: "15:36 15/02/2023",
            title: "",
            description: ""
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
                    />
                </Form.Group>
                <Form.Group controlId="postDescription">
                    <Form.Label>Description</Form.Label>
                    <Form.Control
                        name="description"
                        type="text"
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