import { useParams, useNavigate } from "react-router-dom";
import { Card } from "react-bootstrap";
import "./style.css";
import React, { useState, useEffect, useContext } from "react";
import { RecipeFilterContext } from "../../context/SearchProvider";
import axios from "axios";
import ScrollPage from "../Scroll/ScrollPage";

const RecipeDescrip = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState([]);
  const [ingredient, setIngredient] = useState([]);
  const [calorie, setCalorie] = useState([]);
  const [cooking, setCooking] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(0);
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
    navigate(`/detail/${id}`);
  };

  let count = 0;

  return (
    <div className="container">
      <ScrollPage />
      <div className="view1">
        <div className="Descrip-top">
          <h1>
            <img className="favicon" src="/favicon.png" alt="로고가 없습니다" />
            <a href="../../">5조의 레시피</a>
          </h1>
          <img
            className="first-img"
            src={recipe.main_image}
            alt={recipe.name}
          />
        </div>
        <div className="cooking-info section-card">
          <div className="Descrip-down">
            <div className="title-like-view-div">
              <div className="Descrip-tit">{recipe.name}</div>
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
            </div>
            <div className="Descrip-info">{recipe.description}</div>
            <div className="link-align">
              <div className="Descript-link1">
                <span>조리방법</span>
                <span>{recipe.type}</span>
              </div>
              <div className="Descript-link1">
                <span>요리종류</span>
                <span>{recipe.kind}</span>
              </div>
              <div className="Descript-link1">
                <span>해쉬태그</span>
                <span>{recipe.hashtag}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="div-card">
          <h3>다른 레시피</h3>
          <hr className="hr" />
          <div className="another-recipe">
            {searchResult.map((el, index) => {
              if (String(el.id) !== String(id) && count < 5) {
                count += 1;
                return (
                  <Card
                    key={index}
                    onClick={() => navigate(`/detail/${el.id}`)}
                    className="item-another-card"
                  >
                    <img
                      src={el.main_image}
                      alt={el.name}
                      className="item-image2"
                    />
                    <Card.Title className="item-title">{el.name}</Card.Title>
                    <Card.Body className="text-align">
                      <p>❤️좋아요 {el.like_count}</p>
                      <p>👀조회수 {el.view_count}</p>
                    </Card.Body>
                  </Card>
                );
              }
              return null;
            })}
          </div>
        </div>

        <div className="view2">
          <div className="div-card">
            <h3>재료</h3>
            <hr className="hr" />
            <ul>
              {ingredient.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="div-card">
            <h3>성분</h3>
            <hr className="hr" />
            <ul>
              <li className="icon-calorie">열량 : {calorie.calorie} kcal</li>
              <li className="icon-carbohydrate">
                탄수화물 : {calorie.carbohydrate} g
              </li>
              <li className="icon-protein">단백질 : {calorie.protein} g</li>
              <li className="icon-fat">지방 : {calorie.province} g</li>
              <li className="icon-sodium">나트륨 : {calorie.salt} mg</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="view3">
        <h3>조리 순서</h3>
        <hr className="hr" />
        <div className="cooking-desc-img-div">
          <div className="cooking-desc-div">
            <ul className="no-bullets">
              {cooking.map((step, index) => (
                <li
                  key={index}
                  className={`recipe-order-desc ${
                    selectedIndex === index ? "selected" : ""
                  }`}
                >
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
      </div>
    </div>
  );
};

export default RecipeDescrip;
