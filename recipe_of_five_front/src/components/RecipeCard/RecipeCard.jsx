import React, { useContext } from "react";
import { Card, ListGroup, Button } from "react-bootstrap";
import { RecipeFilterContext } from "../../context/SearchProvider";
import "./style.css";
import axios from "axios";

export default function RecipeCard() {
  const { searchResult, setSelectCard, setIddata } =
    useContext(RecipeFilterContext);

  const handleLikeButtonClick = (id) => {
    axios.get(
      `http://ec2-3-38-45-40.ap-northeast-2.compute.amazonaws.com:3000/api/food/like/${id}`
    );
  };

  const handleCardClick = (cardId) => {
    setIddata(cardId);
    setSelectCard(true);
  };

  return (
    <div>
      {searchResult.map((el, index) => {
        if (index === 10) return;
        return (
          <Card
            key={index}
            style={{ width: "18rem" }}
            onClick={() => handleCardClick(el.id)}
          >
            <img src={el.main_image}></img>
            <ListGroup className="list-group-flush">
              <Card.Title>{el.name}</Card.Title>
              <Card.Text>{el.description}</Card.Text>
            </ListGroup>
            <Card.Body className="text-align">
              <Button
                variant="primary"
                onClick={() => {
                  handleLikeButtonClick(el.id);
                }}
              >
                좋아요
              </Button>
              {el.like_count}
              <br />
              <p>조회수 : {el.view_count}</p>
            </Card.Body>
          </Card>
        );
      })}
    </div>
  );
}
