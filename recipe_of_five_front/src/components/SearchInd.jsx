import React, { useContext, useState, useEffect } from "react";
import { AppContext } from "../App";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import ToggleButton from "react-bootstrap/ToggleButton";
import { Button, InputGroup, Form } from "react-bootstrap";

export default function SearchInd() {
    const [input, setInput] = useState("");
    const [radioValue, setRadioValue] = useState("1");
    const [include, setInclude] = useState(true);
    const radios = [
        { name: "포함", value: "1" },
        { name: "제외", value: "2" },
    ];

    const searchOtions = useContext(AppContext);
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
                            console.log(include);
                            setRadioValue(e.currentTarget.value);
                            setInclude(!include);
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
                <Button
                    variant="outline-secondary"
                    id="button-addon2"
                    onClick={() => {
                        if (include) {
                            searchOtions.include.push(input);
                        } else {
                            searchOtions.exclude.push(input);
                        }
                        setInput("");
                    }}
                >
                    Button
                </Button>
            </InputGroup>
        </div>
    );
}
