import React, { useContext } from "react";
import { RecipeFilterContext } from "../../context/SearchProvider";
import Button from "react-bootstrap/Button";
import "./style.css";

export default function RecipeResult() {
  const { exclude, include } = useContext(RecipeFilterContext);
  const colors = ["success", "warning", "danger", "secondary"];
  return (
    <div className="recipe-result">
      <div className="include-ingred">
        <ul className="ingredient-list">
          {include.map((ingredient, index) => (
            <li key={index} className="ingredient-list-value">
              <Button
                variant={"warning"}
                disabled
                className="ingredient-list-value-button"
              >
                {ingredient}
              </Button>
            </li>
          ))}
        </ul>
        <span className="ingredient-list-typo-style">는 포함된,</span>
      </div>

      <div className="exclude-ingred">
        <ul className="ingredient-list">
          {exclude.map((ingredient, index) => (
            <li key={index} className="ingredient-list-value">
              <Button
                variant={"warning"}
                disabled
                className="ingredient-list-value-button"
              >
                {ingredient}
              </Button>
            </li>
          ))}
        </ul>
        <span className="ingredient-list-typo-style">
          는 제외된 레시피입니다.
        </span>
      </div>
    </div>
  );
}
