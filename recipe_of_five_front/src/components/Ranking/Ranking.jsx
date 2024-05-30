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
            onClick={() => navigate(`/detail/${recipe.id}`)}
            className="item-card"
          >
            <img src={recipe.main_image}></img>
            <Card.Title className="item-title">{recipe.name}</Card.Title>

            <Card.Body className="text-align">
              <p>❤️좋아요 {recipe.like_count}</p>
              <p>👀조회수 {recipe.view_count}</p>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
}
