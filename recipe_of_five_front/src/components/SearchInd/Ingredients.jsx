import React, { useContext, useState, useEffect } from "react";
import { RecipeFilterContext } from "../../context/SearchProvider";
import { Button } from "react-bootstrap";
import "./ingredient-style.css";

export default function SearchInd() {
  const { exclude, setExclude, include, setInclude } =
    useContext(RecipeFilterContext);

  return (
    <div className="ingredient-main-div">
      <div className="ingredient-div">
        {include.length > 0 && (
          <div style={{ display: "flex" }} className="include-exclude">
            {include.map((item, idx) => (
              <Button
                key={idx}
                onClick={() => {
                  setInclude((prev) => prev.filter((el) => el !== item));
                }}
                style={{
                  backgroundColor: "#fea304",
                  color: "#ffffff",
                  borderColor: "#fea304",
                }}
              >
                {item}
              </Button>
            ))}
            <div>는 포함된</div>
          </div>
        )}

        <div>
          {exclude.length > 0 && (
            <div style={{ display: "flex" }} className="include-exclude">
              {exclude.map((item, idx) => (
                <Button
                  key={idx}
                  onClick={() => {
                    setExclude((prev) => prev.filter((el) => el !== item));
                  }}
                  style={{
                    backgroundColor: "#fea304",
                    color: "#ffffff",
                    borderColor: "#fea304",
                  }}
                >
                  {item}
                </Button>
              ))}
              <div>는 제외된</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
