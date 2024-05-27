import React from "react";
import testImg from "../../images/test.jpeg";
import { Card, Button, Image } from "react-bootstrap";
// import { RecipeFilterContext } from "../context/SearchProvider";
import "./style.css";
import { useState } from "react";

import test1 from "../../images/test1.jpeg";

export default function RecipeDescrip() {
  const [img, setImg] = useState();
  const [title, setTitle] = useState("시금치 계란 볶음 레시피 다이어트 반찬");
  const [info, setInfo] = useState(
    " 계란은 단백질이 풍부하고 칼로리가 낮아 다이어트에 좋은 식품! 또 계란노른자에는 루테인 성분이 풍부하여 눈 건강에도 도움이 되며 탈모예방에도 효과적이라고 해요. 이렇게 몸에 좋은 두 가지 재료를 함께 볶아낸다면 얼마나 맛있게요? 시금치 계란 볶음 레시피 바로 시작할게요."
  );
  const [link, setLink] = useState("해쉬태그 내용 기입");
  const [hash, setHash] = useState();

  const [anotherlink, setanotherLink] = useState();

  return (
    <div className="container">
      <div className="view1">
        <div className="Descrip-top">
          <div className="first-img">
            <Image src={testImg} fluid="true" />
          </div>
        </div>
        <div className="Descrip-down">
          <div className="Descrip-tit">{title}</div>
          <div className="Descrip-info">
            {/* 레시피 정보 기입 */}
            {info}
          </div>
          <div className="Descript-link">
            <span>{link}</span>
            <span>30분 이내</span>
            <span>공유 링크</span>
          </div>
        </div>

        <div>
          <div className="another-recipe">시금치 계란 볶음의 다른 레시피</div>

          {/* 이부분에 레시피 카드형식 넣기 */}
        </div>

        <div className="view2">
          <div>재료</div>
          <Button variant="outline-warning">재료1</Button>
          <Button variant="outline-danger">재료2</Button>
          <Button variant="outline-success">재료3</Button>
          <Button variant="outline-dark">재료4</Button>
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
