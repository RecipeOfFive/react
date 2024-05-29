import testImg from "../../images/test.jpeg";
import { Card, ListGroup } from "react-bootstrap";
import "./style.css";
import React, { useState, useEffect, useContext } from "react";
import { RecipeFilterContext } from "../../context/SearchProvider";
import test1 from "../../images/test1.jpeg";
import axios from "axios";

export default function RecipeDescrip() {
  const [title, setTitle] = useState("시금치 계란 볶음 레시피 다이어트 반찬");
  const [info, setInfo] = useState(
    " 계란은 단백질이 풍부하고 칼로리가 낮아 다이어트에 좋은 식품! 또 계란노른자에는 루테인 성분이 풍부하여 눈 건강에도 도움이 되며 탈모예방에도 효과적이라고 해요. 이렇게 몸에 좋은 두 가지 재료를 함께 볶아낸다면 얼마나 맛있게요? 시금치 계란 볶음 레시피 바로 시작할게요."
  );
  const [link, setLink] = useState("해쉬태그 내용 기입");
  const [hash, setHash] = useState();

  const [anotherlink, setanotherLink] = useState();
  const [calorie, setCalorie] = useState([]);

  const {
    searchOptions,
    setSearchOptions,
    include,
    exclude,
    ranking,
    searchResult,
  } = useContext(RecipeFilterContext);

  // useEffect(()=>){
  //   axios
  //   .post(        "http://ec2-3-38-45-40.ap-northeast-2.compute.amazonaws.com:3000/api/food/nutirent/"
  //   )
  // }

  console.log(searchResult[0]);
  return (
    <div className="container">
      <div className="view1">
        <div className="Descrip-top">
          <img className="first-img" src4={testImg} />
        </div>
        <div className="Descrip-down">
          <div className="Descrip-tit">{title}</div>
          <div className="Descrip-info">
            {/* 레시피 정보 기입 */}
            {info}
          </div>
          {/* <div className="Descript-link">
            <span>{link}</span>
            <span>30분 이내</span>
            <span>공유 링크</span>
          </div> */}
        </div>

        <div>
          <div className="another-recipe">시금치 계란 볶음의 다른 레시피</div>

          {/* 이부분에 레시피 카드형식 넣기 */}

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

        <div className="view2">
          <div>재료</div>
          <hr className="hr" />

          {/* 여기다가 재료 하나씩 입력 */}
          {/* <ul> */}
          {/* {배열.map(ingredient, index) => ( */}
          {/* <li key={index}> */}
          {/* <Button varient={colors[index%colors.length]}> */}
          {/* {ingredient} */}
          {/* </Button> */}
          {/* </li> */}
          {/* ))} */}

          {/* </ul> */}

          <div>열량</div>
          <hr className="hr" />

          {/* 
            <hr />
            <ul>{ {calorie.map(ingredient,index) => (
              <li key={index}>
                {}
            )} }</ul> */}
        </div>

        <div className="view3">
          <div className="view3-tit">조리순서</div>
          <ul>
            <li>
              {/* 해당 레시피의 순서 만큼 반복문 돌리기 */}
              <div>1</div>
              <div>먼저 시금치는 흐르는 물에 깨끗이 씻어줍니다.</div>
              <div>
                <img src={test1}></img>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
