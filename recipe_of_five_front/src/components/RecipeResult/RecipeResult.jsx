import React, { useContext, useState, useEffect } from "react";
import { RecipeFilterContext } from "../context/SearchProvider";
import Button from "react-bootstrap/Button";

export default function RecipeResult() {
  const { exclude, include } = useContext(RecipeFilterContext);
  const colors = ["success", "warning", "Danger", "Secondary"];
  return (
    <div>
      <div className="include-ingred">
        <ul>
          {include.map((ingredient, index) => {
            <li key={index}>
              <Button variant={colors[index % colors.length]}>
                {ingredient}
              </Button>
            </li>;
          })}
        </ul>
        <span>는 포함된,</span>
      </div>

      <div className="exclude-ingred">
        <ul>
          {exclude.map((ingredient, index) => {
            <li key={index}>
              <Button variant={colors[index % colors.length]}>
                {ingredient}
              </Button>
            </li>;
          })}
        </ul>
        <span>는 제외된,</span>
      </div>
    </div>
  );
}
