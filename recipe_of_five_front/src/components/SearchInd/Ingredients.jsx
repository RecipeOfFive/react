import React, { useContext, useState, useEffect } from "react";
import { RecipeFilterContext } from "../../context/SearchProvider";
import "./style.css";

export default function SearchInd() {
  const { exclude, setExclude, include, setInclude } =
    useContext(RecipeFilterContext);

  return (
    <div className="ingredients-div" style={{ display: "flex" }}>
      <div>
        <h1>포함</h1>
        <div className="item-div">
          {include.map((item, idx) => (
            <span
              key={idx}
              onClick={() => {
                setInclude((prev) => prev.filter((el) => el !== item));
              }}
            >
              {item}
            </span>
          ))}
        </div>
      </div>

      <div>
        <h1>제외</h1>
        <div className="item-div">
          {exclude.map((item, idx) => (
            <span
              key={idx}
              onClick={() => {
                setExclude((prev) => prev.filter((el) => el !== item));
              }}
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
