import React, { useContext, useState } from "react";
import { RecipeFilterContext } from "../../context/SearchProvider";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import ToggleButton from "react-bootstrap/ToggleButton";
import { InputGroup, Form } from "react-bootstrap";
import "./style.css";

export default function SearchInd() {
  const { include, exclude, setExclude, setInclude, setIsSearch } =
    useContext(RecipeFilterContext);

  const [input, setInput] = useState("");
  const [radioValue, setRadioValue] = useState("1");

  const handleRadioChange = (value) => {
    setRadioValue(value);
    // 검색 상태 설정
  };

  const handleButtonClick = (isInclude) => {
    setIsSearch(true);
    if (input === "") {
      alert("재료를 입력해주세요.");
      return;
    } else if (include.includes(input)) {
      alert("이미 포함된 재료입니다.");
      return;
    } else if (exclude.includes(input)) {
      alert("이미 제외된 재료입니다.");
      return;
    } else if (isInclude) {
      setInclude((prev) => [...prev, input]);
    } else {
      setExclude((prev) => [...prev, input]);
    }

    setInput(""); // 입력 필드 초기화
  };

  return (
    <div className="main-div-SearchInd">
      <h1>
        <a href="./">5조의 레시피</a>
      </h1>
      <div className="searchInd-input">
        <InputGroup className="mb-3">
          <Form.Control
            value={input}
            placeholder="검색할 재료를 입력하세요"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
            onChange={(e) => setInput(e.target.value)}
          />
          <div className="searchInd-btn">
            <ButtonGroup className="main-div-SearchInd-buttongroup">
              <ToggleButton
                className={`main-div-SearchInd-togglebtn ${
                  radioValue === "1" ? "custom-active" : "custom-inactive"
                }`}
                id="radio-include"
                type="radio"
                variant="outline-secondary"
                name="radio"
                value="1"
                checked={radioValue === "1"}
                onChange={(e) => handleRadioChange(e.currentTarget.value)}
                onClick={() => handleButtonClick(true)}
              >
                포함
              </ToggleButton>
              <ToggleButton
                className={`main-div-SearchInd-togglebtn ${
                  radioValue === "2" ? "custom-active" : "custom-inactive"
                }`}
                id="radio-exclude"
                type="radio"
                variant="outline-secondary"
                name="radio"
                value="2"
                checked={radioValue === "2"}
                onChange={(e) => handleRadioChange(e.currentTarget.value)}
                onClick={() => handleButtonClick(false)}
              >
                제외
              </ToggleButton>
            </ButtonGroup>
          </div>
        </InputGroup>
      </div>
    </div>
  );
}
