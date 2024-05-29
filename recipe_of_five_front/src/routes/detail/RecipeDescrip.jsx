import { useParams, useNavigate } from "react-router-dom";
import { Card, ListGroup, Button } from "react-bootstrap";
import "./style.css";
import React, { useState, useEffect, useContext } from "react";
import { RecipeFilterContext } from "../../context/SearchProvider";
import axios from "axios";

const RecipeDescrip = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState([]);
  const [ingredient, setIngredient] = useState([]);
  const [calorie, setCalorie] = useState([]);
  const [cooking, setCooking] = useState([]);

  const { searchResult } = useContext(RecipeFilterContext);
  const navigate = useNavigate();

  const fetchRecipe = async () => {
    try {
      const resp = await axios.get(
        `http://ec2-3-38-45-40.ap-northeast-2.compute.amazonaws.com:3000/api/food/${id}`
      );
      setRecipe(resp.data);
    } catch (error) {
      console.log("에러 발생1");
    }
  };

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

  const fetchCooking = async () => {
    try {
      const resp = await axios.get(
        `http://ec2-3-38-45-40.ap-northeast-2.compute.amazonaws.com:3000/api/recipe/${id}`
      );
      setCooking(resp.data);
    } catch (error) {
      console.log("에러 발생4");
    }
  };

  const fetchItem = async () => {
    try {
      const resp = await axios.post(
        `http://ec2-3-38-45-40.ap-northeast-2.compute.amazonaws.com:3000/api/recipe/${id}`
      );
      setCooking(resp.data);
    } catch (error) {
      console.log("에러 발생4");
    }
  };

  useEffect(() => {
    fetchRecipe();
    fetchIngredient();
    fetchNutrient();
    fetchCooking();
    fetchItem();
  }, [id]);

  const changeid = (id) => {
    navigate(`/${id}`);
  };

  let count = 0;
  return (
    <div className="container">
      <div className="view1">
        <div className="Descrip-top">
          <img className="first-img" src={recipe.main_image} />
        </div>
        <div className="Descrip-down">
          <div className="Descrip-tit">{recipe.name}</div>
          <div className="Descrip-info">{recipe.description}</div>

          <div className="link-align">
            <div className="Descript-link1">
              <span>조리방법</span>
              <span>{recipe.type}</span>{" "}
            </div>
            <div className="Descript-link1">
              <span>요리종류</span>
              <span>{recipe.kind}</span>{" "}
            </div>

            <div className="Descript-link1">
              <span>해쉬태그</span>
              <span>{recipe.hashtag}</span>{" "}
            </div>
          </div>
        </div>

        <div>
          <div className="another-recipe">다른 레시피</div>

          {searchResult.map((el, index) => {
            if (String(el.id) !== String(id) && count < 3) {
              count += 1;
              return (
                <Card key={index} style={{ width: "18rem" }}>
                  <img
                    src={el.main_image}
                    onClick={() => changeid(el.id)}
                  ></img>
                  <ListGroup className="list-group-flush">
                    <Card.Title>{el.name}</Card.Title>
                    <Card.Text onClick={() => navigate(`/${el.id}`)}>
                      {el.description}
                    </Card.Text>
                  </ListGroup>
                  <Card.Body className="text-align">
                    <Button
                      variant="primary"
                      onClick={() => {
                        axios.get(
                          `http://ec2-3-38-45-40.ap-northeast-2.compute.amazonaws.com:3000/api/food/like/${el.id}`
                        );
                      }}
                    >
                      좋아요
                    </Button>
                    {el.like_count}
                    <br />
                    <p>조회수 : {el.view_count}</p>
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
