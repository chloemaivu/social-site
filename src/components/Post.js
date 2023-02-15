import Table from 'react-bootstrap/Table';
import '../App.css';

function Post(props) {
    const buildRows = () => {
        return props.todos.map((post) => (
            <tr key={post.id}>
                <td>
                    {post.author}
                </td>
                <td>
                    {post.date}
                </td>
                <td>
                    {post.title}
                </td>
                <td>
                    {post.description ? post.description : "No description for this post!"}
                </td>
            </tr>
            )
        )
    }

    return (
        <>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Author</th>
                        <th>Date</th>
                        <th>Title</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    {buildRows()}
                </tbody>
            </Table>
        </>
    );

}
export default Post;