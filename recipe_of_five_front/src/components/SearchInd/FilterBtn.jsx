import React, { useContext, useState } from "react";
import ToggleButtonGroup from "react-bootstrap/ToggleButtonGroup";
import ToggleButton from "react-bootstrap/ToggleButton";
import { RecipeFilterContext } from "../../context/SearchProvider";

export default function FilterBtn() {
  const { filterMethod, setFilterMethod } = useContext(RecipeFilterContext);

  const options = ["끓이기", "삶기", "찌기", "굽기", "볶기", "튀기기"];

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
    //setSearchOptions(value);
  };

  const isSelected = (option) => filterMethod.includes(option);

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
            {option}
          </ToggleButton>
        ))}
        <ToggleButton
          id="tbg-btn-all"
          key="all"
          value="전체"
          className={
            filterMethod.length === options.length
              ? "custom-active2"
              : "custom-inactive2"
          }
        >
          ALL
        </ToggleButton>
      </ToggleButtonGroup>
    </div>
  );
}
