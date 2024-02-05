import React from 'react';
import Card from "react-bootstrap/Card";

// the Player component

const Player = ({ name, team, nationality, jerseyNumber, age, imageUrl }) => {
    return (
    <Card style={{ width: "20rem", margin: "50px" }}>
    <Card.Img variant="top" src={imageUrl} />
    <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
        Team: {team} <br/>
        Nationality: {nationality} <br/>
        Jersey Number: {jerseyNumber} <br/>
        Age: {age}
        </Card.Text>
    </Card.Body>
    </Card>
    );
};

export default Player;