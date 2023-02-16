import React from "react";
import Stack from 'react-bootstrap/Stack';

function UserCard(props) {
    return (
        <div className="userCard mt-4">
            <Stack direction="horizontal" gap={3}>
                <div className="userImage">
                    <img src={props.image} alt={props.username} />
                </div>
                <div className="userInformation">
                    <h3 className="mt-2">{props.username}</h3>
                    <p><i>{props.bio}</i></p>
                    <p><b>Date joined: </b> {props.dateJoined}</p>
                </div>
            </Stack>
        </div>
    );
}

export default UserCard;