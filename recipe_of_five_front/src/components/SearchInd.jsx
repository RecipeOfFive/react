import React from "react";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import ToggleButton from "react-bootstrap/ToggleButton";
import { Button, InputGroup, Form } from "react-bootstrap";
import { useState } from "react";

export default function SearchInd() {
    const [checked, setChecked] = useState(false);
    const [radioValue, setRadioValue] = useState("1");
    const radios = [
        { name: "Active", value: "1" },
        { name: "Radio", value: "2" },
        { name: "Radio", value: "3" },
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
                        onChange={(e) => setRadioValue(e.currentTarget.value)}
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
