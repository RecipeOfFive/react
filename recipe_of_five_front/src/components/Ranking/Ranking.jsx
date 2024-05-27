import React from "react";
import Card from "react-bootstrap/Card";
// import { RecipeFilterContext } from "../context/SearchProvider";
import "./style.css";
export default function Ranking() {
  // const 값 가져오기
  //
  // 4개를 띄우는데 map 사용해서 4개 띄우기.

  return (
    <div>
      <div>
        <h1> 랭킹 </h1>
      </div>

      <ul>
        <Card style={{ width: "80rem" }}>
          <Card.Body className="Rank-location">
            <div>
              <Card.Subtitle className="mb-2 text-muted">
                뒤틀린 황천의 오리 발바닥
              </Card.Subtitle>
              <Card.Text>
                "뒤틀린 황천의 오리 발바닥"은 흔히 '먼 곳', '외딴 곳',
                '정서적으로 먼 곳'을 의미합니다. 이 표현은 상황이나 장소가 매우
                멀고 외딴 곳에 있거나, 이해하기 어려운 상황을 나타낼 때
                사용됩니다. 이 표현은 주로 비유적으로 사용되며, 어떤 것이나 어떤
                상황이 이해하기 어렵거나 해결하기 어려운 정도를 강조할 때
                사용됩니다.
              </Card.Text>
              <Card.Link href="#">
                Like{} / view {}
              </Card.Link>
            </div>
            <div>
              <Card.Img
                variant="top"
                src="https://pds.joongang.co.kr/news/component/htmlphoto_mmdata/202312/17/f2cf3672-26b0-4613-82e0-8a0133986726.jpg"
              />
            </div>
          </Card.Body>
        </Card>
      </ul>
    </div>
  );
}
