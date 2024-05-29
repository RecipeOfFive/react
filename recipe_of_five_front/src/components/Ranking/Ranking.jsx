import React, { useContext } from "react";
import Card from "react-bootstrap/Card";
import { RecipeFilterContext } from "../../context/SearchProvider";
import "./style.css";
export default function Ranking() {
  // const 값 가져오기
  //
  // 4개를 띄우는데 map 사용해서 4개 띄우기.
  const { ranking } = useContext(RecipeFilterContext);
  // searchOptions = 검색한 레시피 데이터들 저장

  return (
    <div>
      <div>
        <h1> 랭킹 </h1>
      </div>

      <div className="rank-image">
        {ranking.map((recipe, index) => (
          <Card key={index} style={{ width: "80rem" }}>
            <Card.Body className="Rank-location">
              <div>
                <Card.Subtitle className="mb-2 text-muted">
                  {recipe.name}
                </Card.Subtitle>
                <Card.Text>{recipe.description}</Card.Text>
                <Card.Link href="#">
                  Like{recipe.likeCount} / view {recipe.viewCount}
                </Card.Link>
              </div>
              <div>
                <Card.Img variant="top" src={recipe.mainpage} />
              </div>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
}
