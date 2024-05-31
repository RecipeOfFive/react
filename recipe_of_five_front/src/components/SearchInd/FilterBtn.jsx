import React, { useContext, useState } from "react";
import ToggleButtonGroup from "react-bootstrap/ToggleButtonGroup";
import ToggleButton from "react-bootstrap/ToggleButton";
import { RecipeFilterContext } from "../../context/SearchProvider";
import "./style.css";
import { useEffect } from "react";

export default function FilterBtn() {
  const { filterMethod, setFilterMethod } = useContext(RecipeFilterContext);

  const optionsText = ["끓이는", "찌는", "튀기는", "굽는", "볶는", "기타"];
  const options = ["끓이기", "찌기", "튀기기", "굽기", "볶기", "기타"];

  const handleChange = (val) => {
    if (val.includes("전체")) {
      if (val.length === 7) {
        setFilterMethod([]);
      } else {
        setFilterMethod([...options]); // 전체 선택
      }
    } else {
      setFilterMethod(val);
    }
  };

  

  const isSelected = (option) => filterMethod.includes(option);

  useEffect(() => {
        setFilterMethod([...options]); // 전체 선택
  }, []);

  return (
    <div className="filter-btn">
      <ToggleButtonGroup
        className="filter-btn-group"
        type="checkbox"
        value={filterMethod}
        onChange={handleChange}
      >
        {options.map((option, index) => (
          <ToggleButton
            key={index}
            id={`tbg-btn-${index + 1}`}
            value={option}
            className={
              isSelected(option) ? "custom-active2" : "custom-inactive2"
            }
          >
            {optionsText[index]}
          </ToggleButton>
        ))}
        <ToggleButton
          id="tbg-btn-all"
          key="all"
          value="전체"
          className={
            filterMethod.length === options.length
              ? "custom-active3"
              : "custom-inactive3"
          }
        >
          ALL
        </ToggleButton>
      </ToggleButtonGroup>
    </div>
  );
}
