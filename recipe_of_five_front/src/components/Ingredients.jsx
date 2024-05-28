import React, { useContext, useState, useEffect } from "react";
import { RecipeFilterContext } from "../context/SearchProvider";

export default function SearchInd() {
  const { exclude, setExclude, include, setInclude } =
    useContext(RecipeFilterContext);

  return (
    <div style={{ display: "flex" }}>
      <div style={{ wigth: "80vw" }}>
        <h1>포함</h1>
        <div
          style={{
            width: "30vw",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "10px",
          }}
        >
          {include.map((item, idx) => (
            <span
              style={{
                margin: "10px",
                border: "solid 1px",
              }}
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

      <div style={{ width: "30vw" }}>
        <h1>제외</h1>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "10px",
          }}
        >
          {exclude.map((item, idx) => (
            <span
              style={{
                margin: "10px",
                border: "solid 1px",
              }}
              key={idx}
              onClick={() => {
                setExclude((prev) => prev.filter((el) => el !== item));
              }}
              //이 부분이 무한루프, 클릭하면 삭제하는 로직
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
