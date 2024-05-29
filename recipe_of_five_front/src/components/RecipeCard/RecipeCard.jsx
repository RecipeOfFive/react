import React, { useContext } from "react";
import { Card, ListGroup } from "react-bootstrap";
import { RecipeFilterContext } from "../../context/SearchProvider";
import "./style.css";

export default function RecipeCard() {
  const { searchResult } = useContext(RecipeFilterContext);
  return (
    <div>
      {searchResult.map((el, index) => {
        if (index === 10) return;
        return (
          <Card key={index} style={{ width: "18rem" }}>
            <img src={el.main_image}></img>
            <ListGroup className="list-group-flush">
              <Card.Title>{el.name}</Card.Title>
              <Card.Text>{el.description}</Card.Text>
            </ListGroup>
            <Card.Body className="text-align">
              <Card.Link>Like : {el.likeCount}</Card.Link>
              <Card.Link>ViewCount : {el.view_count}</Card.Link>
            </Card.Body>
          </Card>
        );
      })}
    </div>
  );
}
