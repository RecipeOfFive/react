import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, ListGroup, Button } from "react-bootstrap";
import { RecipeFilterContext } from "../../context/SearchProvider";
import "./style.css";
import axios from "axios";
import RecipeResult from "../RecipeResult/RecipeResult";

export default function RecipeCard() {
  const { searchResult } = useContext(RecipeFilterContext);
  const navigate = useNavigate();
  return (
    <div>
      <RecipeResult />
      <div className="food-list-grid">
        {searchResult.map((el, index) => {
          if (index === 10) return;
          return (
            <Card key={index} style={{ width: "18rem" }}>
              <Card.Img
                src={el.main_image}
                onClick={() => navigate(`/${el.id}`)}
              ></Card.Img>
              <Card.Title onClick={() => navigate(`/${el.id}`)}>
                {el.name}
              </Card.Title>
              <div className="like-view">
                <button
                  onClick={() => {
                    axios.get(
                      `http://ec2-3-38-45-40.ap-northeast-2.compute.amazonaws.com:3000/api/food/like/${el.id}`
                    );
                  }}
                >
                  Like
                </button>
                <Card.Body
                  className="text-align"
                  onClick={() => navigate(`/${el.id}`)}
                >
                  {el.like_count}
                  <p>View {el.view_count}</p>
                </Card.Body>
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
