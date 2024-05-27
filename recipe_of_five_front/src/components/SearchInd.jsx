import React, { useContext, useState, useEffect } from "react";
import { AppContext } from "../App";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import ToggleButton from "react-bootstrap/ToggleButton";
import { Button, InputGroup, Form } from "react-bootstrap";

export default function SearchInd() {
    const [checked, setChecked] = useState(false);
    const [radioValue, setRadioValue] = useState("1");
    const [include, setInclude] = useState(false);
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
                    placeholder="Recipient's username"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                />
                <Button variant="outline-secondary" id="button-addon2">
                    Button
                </Button>
            </InputGroup>
        </div>
    );
}
