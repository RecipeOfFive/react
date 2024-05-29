import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Card from "react-bootstrap/Card";
import { RecipeFilterContext } from "../../context/SearchProvider";
import "./style.css";
export default function Ranking() {
  // const 값 가져오기
  //
  // 4개를 띄우는데 map 사용해서 4개 띄우기.
  const { ranking } = useContext(RecipeFilterContext);
  // searchOptions = 검색한 레시피 데이터들 저장
  const navigate = useNavigate();
  return (
    <div className="ranking">
      <h1 className="ranking-title"> 랭킹 </h1>
      <div className="rank-list">
        {ranking.map((recipe, index) => (
          <Card
            border="warning"
            key={index}
            onClick={() => navigate(`/${recipe.id}`)}
          >
            <Card.Body className="item-location">
              <div className="item-content">
                <Card.Subtitle className="item-title">
                  {recipe.name}
                </Card.Subtitle>
                <Card.Text className="item-description">
                  {recipe.description}
                </Card.Text>
                <div className="like-view-div">
                  <span className="like-view">Like </span>
                  <span className="like-view-count">{recipe.like_count} </span>
                  <span className="like-view">View </span>
                  <span className="like-view-count">{recipe.view_count} </span>
                </div>
              </div>
              <div>
                <Card.Img
                  variant="top"
                  src={recipe.main_image}
                  className="item-image"
                />
              </div>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
}
