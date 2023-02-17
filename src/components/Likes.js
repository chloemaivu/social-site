import React from 'react';
import Table from 'react-bootstrap/Table'

class Likes extends React.Component {

  clickHandler(event) {
    console.log(this.props.postId)
    this.props.likeaction(this.props.postId);
  }

  render() {
    return (
      <>
        <Table>
          <tbody>
            <tr>
              <td>
                <MDBIcon onClick={() => this.clickHandler()} fluid className="mx-auto" width="25px" alt="heart logo" far icon="heart" />
              </td>
              <td>
                {this.props.no}
              </td>
            </tr>
          </tbody>
        </Table>
      </>
    );
  }
}

export default Likes;