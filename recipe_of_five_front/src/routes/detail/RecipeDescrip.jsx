import { useParams } from "react-router-dom";
import testImg from "../../images/test.jpeg";
import { Card, ListGroup } from "react-bootstrap";
import "./style.css";
import React, { useState, useEffect, useContext } from "react";
import { RecipeFilterContext } from "../../context/SearchProvider";
import test1 from "../../images/test1.jpeg";
import axios from "axios";
const RecipeDescrip = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState([]);
  const [ingredient, setIngredient] = useState([]);
  const [calorie, setCalorie] = useState([]);
  const [cooking, setCooking] = useState([]);

  const { searchResult } = useContext(RecipeFilterContext);

  // 레시피 상세 정보 가져오기
  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const resp = await axios.get(
          `http://ec2-3-38-45-40.ap-northeast-2.compute.amazonaws.com:3000/api/food/${id}`
        );
        console.log(resp);
        setRecipe(resp.data);
        console.log(recipe);
      } catch (error) {
        console.log("에러 발생1");
      }
    };

    fetchRecipe();
  }, []);

  // // 재료 정보 가져오기
  useEffect(() => {
    const fetchIngredient = async () => {
      try {
        const resp = await axios.get(
          `http://ec2-3-38-45-40.ap-northeast-2.compute.amazonaws.com:3000/api/food/ingredient/${id}`
        );

        if (resp.data && resp.data["ingredient"]) {
          const ingredients = resp.data["ingredient"].split("\n");
          setIngredient(ingredients);
        }
      } catch (error) {
        console.log("에러 발생2");
      }
    };
    fetchIngredient();
  }, []);

  // // 영양소 정보 가져오기
  useEffect(() => {
    const fetchNutrient = async () => {
      try {
        const resp = await axios.get(
          `http://ec2-3-38-45-40.ap-northeast-2.compute.amazonaws.com:3000/api/food/nutrient/${id}`
        );

        setCalorie(resp.data);
      } catch (error) {
        console.log("에러 발생3");
      }
    };

    fetchNutrient();
  }, []);

  // 요리 레시피 반환
  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const resp = await axios.get(
          `http://ec2-3-38-45-40.ap-northeast-2.compute.amazonaws.com:3000/api/recipe/${id}`
        );

        setCooking(resp.data);
      } catch (error) {
        console.log("에러 발생4");
      }
    };

    fetchRecipe();
  }, []);

  let count = 0;
  console.log(cooking);
  return (
    <div className="container">
      <div className="view1">
        <div className="Descrip-top">
          <img
            className="first-img"
            src={recipe.main_image}
            alt="대체 이미지"
          />
        </div>
        <div className="Descrip-down">
          <div className="Descrip-tit">{recipe.name}</div>
          <div className="Descrip-info">
            {/* 레시피 정보 기입 */}
            {recipe.description}
          </div>
          {/* <div className="Descript-link">
        <span>{link}</span>
        <span>30분 이내</span>
        <span>공유 링크</span>
      </div> */}
        </div>

        <div>
          <div className="another-recipe">다른 레시피</div>

          {searchResult.map((el, index) => {
            if (String(el.id) !== String(id) && count < 3) {
              console.log(typeof el.id);
              console.log(typeof id);
              console.log("el.id값은", el.id);
              console.log("id값은", id);
              count += 1;
              return (
                <Card key={index} style={{ width: "18rem" }}>
                  <img src={el.main_image} alt={el.name}></img>
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
            }
          })}
        </div>

        <div className="view2">
          <div>재료</div>
          <hr className="hr" />

          {/* 여기다가 재료 하나씩 입력 */}
          <ul>
            {ingredient.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>

          <div>성분</div>
          <hr className="hr" />
          <ul>
            <li>열량 : {calorie.calorie}</li>
            <li>탄수화물 : {calorie.carbohydrate}</li>
            <li>단백질 : {calorie.protein}</li>
            <li>지방 : {calorie.province}</li>
            <li>나트륨 : {calorie.salt}</li>
          </ul>
        </div>

        <div className="view3">
          <div className="view3-tit">조리순서</div>
          <ul className="no-bullets">
            {cooking.map((step, index) => (
              <li key={index}>
                <div>{step.description.replace(/.$/, "")}</div>
                <div>
                  <img src={step.image} alt={`Step ${step.recipeOrder}`} />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default RecipeDescrip;
