import React from "react";
import { Card, ListGroup } from "react-bootstrap";
import { RecipeFilterContext } from "../../context/SearchProvider";
import img from "../../images/test.jpeg";
import "./style.css";
export default function RecipeCard() {
  return (
    <Card style={{ width: "18rem" }}>
      {/* <Card.Img variant="top" src="holder.js/100px180?text=Image cap" /> */}

      <img src={img}></img>
      <ListGroup className="list-group-flush">
        <Card.Title>Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </ListGroup>
      <Card.Body className="text-align">
        <Card.Link href="#">Like : 5</Card.Link>
        <Card.Link href="#">ViewCount : 4</Card.Link>
      </Card.Body>
    </Card>
  );
}
