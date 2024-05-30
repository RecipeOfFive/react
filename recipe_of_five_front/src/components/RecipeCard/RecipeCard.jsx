import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, Button } from "react-bootstrap";
import { RecipeFilterContext } from "../../context/SearchProvider";
import "./style.css";
import RecipeResult from "../RecipeResult/RecipeResult";

export default function RecipeCard() {
  const { setSearchResult, searchResult, searchOptions, setSearchOptions } =
    useContext(RecipeFilterContext);
  const navigate = useNavigate();

  const [currBtn, setCurrBtn] = useState("인기순");

  function handleOrder() {
    if (searchOptions.order === "like_count") {
      setCurrBtn("최신순");
    } else {
      setCurrBtn("인기순");
    }

    setSearchOptions((prevOptions) => {
      return {
        ...prevOptions,
        order:
          searchOptions.order === "like_count" ? "view_count" : "like_count",
      };
    });
  }

  return (
    <div>
      <div className="sort-div">
        <Button onClick={handleOrder} className="sort-button">
          {currBtn}
        </Button>
      </div>
      <div className="food-list-grid">
        {searchResult.map((el, index) => {
          if (index === 10) return;
          return (
            <Card
              key={index}
              onClick={() => navigate(`/${el.id}`)}
              className="item-card"
            >
              <img src={el.main_image}></img>

              <Card.Title className="item-title">{el.name}</Card.Title>

              <Card.Body className="text-align">
                <p>❤️좋아요 {el.like_count}</p>
                <p>👀조회수 {el.view_count}</p>
              </Card.Body>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
