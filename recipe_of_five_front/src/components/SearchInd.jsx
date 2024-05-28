import React, { useContext, useState, useEffect } from "react";
import { RecipeFilterContext } from "../context/SearchProvider";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import ToggleButton from "react-bootstrap/ToggleButton";
import { Button, InputGroup, Form } from "react-bootstrap";

export default function SearchInd() {
    const { include, exclude, setExclude, setInclude } =
        useContext(RecipeFilterContext);

    const [input, setInput] = useState("");
    const [radioValue, setRadioValue] = useState("1");
    const [isInclude, setIsInclude] = useState(true);
    const radios = [
        { name: "포함", value: "1" },
        { name: "제외", value: "2" },
    ];

    return (
        <div>
            <ButtonGroup>
                {radios.map((radio, idx) => (
                    <ToggleButton
                        key={idx}
                        id={`radio-${idx}`}
                        type="radio"
                        variant={idx % 2 ? "outline-success" : "outline-danger"}
                        name="radio"
                        value={radio.value}
                        checked={radioValue === radio.value}
                        onChange={(e) => {
                            setRadioValue(e.currentTarget.value);
                            setIsInclude(!isInclude);
                        }}
                    >
                        {radio.name}
                    </ToggleButton>
                ))}
            </ButtonGroup>
            <InputGroup className="mb-3">
                <Form.Control
                    value={input}
                    placeholder="검색할 재료를 입력하세요"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                    onChange={(e) => setInput(e.target.value)}
                />
                {"   "}
                <Button
                    variant="outline-secondary"
                    id="button-addon2"
                    onClick={() => {
                        if (include.includes(input)) {
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
                        setInput("");
                    }}
                >
                    적용
                </Button>
            </InputGroup>
        </div>
    );
}
