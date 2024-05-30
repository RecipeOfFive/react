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
      setCurrBtn("조회순");
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
      {searchResult.length > 0 ? (
        <>
          <div className="sort-div">
            <Button onClick={handleOrder} className="sort-button">
              {currBtn}
            </Button>
          </div>
          <div className="food-list-grid">
            {searchResult.slice(0, 10).map((el, index) => (
              <Card
                key={index}
                onClick={() => navigate(`/detail/${el.id}`)}
                className="item-card"
              >
                <img src={el.main_image} alt={el.name}></img>

                <Card.Title className="item-title">{el.name}</Card.Title>

                <Card.Body className="text-align">
                  <p>❤️좋아요 {el.like_count}</p>
                  <p>👀조회수 {el.view_count}</p>
                </Card.Body>
              </Card>
            ))}
          </div>
        </>
      ) : (
        <h1 className="no-content">죄송하지만 맛있는 레시피가 없어요!</h1>
      )}
    </div>
  );
}
