import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, Button } from "react-bootstrap";
import { RecipeFilterContext } from "../../context/SearchProvider";
import "./style.css";
import RecipeResult from "../RecipeResult/RecipeResult";

export default function RecipeCard() {
  const { searchResult, searchOptions, setSearchOptions } =
    useContext(RecipeFilterContext);
  const navigate = useNavigate();

  const [currBtn, setCurrBtn] = useState("좋아요");

  function handleOrder() {
    if (searchOptions.order === "like_count") {
      setCurrBtn("조회수");
    } else {
      setCurrBtn("좋아요");
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
      <RecipeResult />
      <div>
        <Button onClick={handleOrder}>{currBtn}</Button>
      </div>
      <div className="food-list-grid">
        {searchResult.map((el, index) => {
          if (index === 10) return;
          return (
            <Card key={index} onClick={() => navigate(`/${el.id}`)}>
              <img src={el.main_image}></img>

              <Card.Title className="item-title">{el.name}</Card.Title>

              <Card.Body className="text-align">
                <p>Like {el.like_count}</p>
                <p>View {el.view_count}</p>
              </Card.Body>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
