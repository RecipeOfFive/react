import { useParams, useNavigate } from "react-router-dom";
import { Card, ListGroup, Button, Row, Col } from "react-bootstrap";
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
  const [selectedIndex, setSelectedIndex] = useState(1);
  const [like, setLike] = useState(0);
  const { searchResult } = useContext(RecipeFilterContext);
  const navigate = useNavigate();
  const URL = "http://ec2-3-38-45-40.ap-northeast-2.compute.amazonaws.com:3000";

  const fetchRecipe = async () => {
    try {
      const resp = await axios.get(`${URL}/api/food/${id}`);
      console.log(resp.data);
      setRecipe(resp.data);
    } catch (error) {
      console.log("에러 발생1");
    }
  };

  const fetchIngredient = async () => {
    try {
      const resp = await axios.get(`${URL}/api/food/ingredient/${id}`);

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
      const resp = await axios.get(`${URL}/api/food/nutrient/${id}`);
      setCalorie(resp.data);
    } catch (error) {
      console.log("에러 발생3");
    }
  };

  const fetchCooking = async () => {
    try {
      const resp = await axios.get(`${URL}/api/recipe/${id}`);
      setCooking(resp.data);
    } catch (error) {
      console.log("에러 발생4");
    }
  };

  const fetchItem = async () => {
    try {
      const resp = await axios.post(`${URL}/api/recipe/${id}`);
      setCooking(resp.data);
    } catch (error) {
      console.log("에러 발생4");
    }
  };

  const updateLike = async (like) => {
    try {
      await axios.get(`${URL}/api/food/like/${id}`);
      setRecipe({ ...recipe, like_count: like + 1 });
    } catch (error) {
      console.log("에러 발생5");
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

  // console.log(cooking);
  // console.log(selectedIndex);

  return (
    <div className="container">
      <div className="view1">
        <div className="Descrip-top">
          <div className="like-view">
            <button
              onClick={() => updateLike(recipe.like_count)}
              className="like-button"
            >
              ❤️좋아요
            </button>
            <p>{recipe.like_count}</p>
            <p>👀조회수 </p>
            <p>{recipe.view_count}</p>
          </div>
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
          <h3>다른 레시피</h3>
          <div className="another-recipe">
            {searchResult.map((el, index) => {
              if (String(el.id) !== String(id) && count < 3) {
                count += 1;
                return (
                  <Card
                    key={index}
                    onClick={() => navigate(`/${el.id}`)}
                    className="item-card"
                  >
                    <img src={el.main_image}></img>

                    <Card.Title className="item-title">{el.name}</Card.Title>

                    <Card.Body className="text-align">
                      <p>❤️좋아요 {el.like_count}</p>
                      <p>👀조회수 {el.view_count}</p>
                    </Card.Body>
                  </Card>
                );
              }
            })}
          </div>
        </div>

        <div className="view2">
          <div>
            <h3>재료</h3>
          </div>
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
          <h3>조리순서</h3>
          <div className="cooking-desc-img-div">
            <div className="cooking-desc-div">
              <ul className="no-bullets">
                {cooking.map((step, index) => (
                  <li>
                    <div onClick={() => setSelectedIndex(index)}>
                      {step.description.replace(/.$/, "")}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            {cooking.length > 0 && (
              <div className="cooking-img-div">
                <img
                  src={cooking[selectedIndex].image}
                  alt={`Step ${cooking[selectedIndex].recipeOrder}`}
                  className="full-width-image"
                />
              </div>
            )}
          </div>
          {/* <ul className="no-bullets">
          {cooking.map((step, index) => (
            <li key={index}>
              <div>{step.description.replace(/.$/, "")}</div>
              <div>
                <img src={step.image} alt={`Step ${step.recipeOrder}`} />
              </div>
            </li>
          ))}
        </ul> */}
        </div>
      </div>
    </div>
  );
};

export default RecipeDescrip;
