import React, { useState } from "react";
import ToggleButtonGroup from "react-bootstrap/ToggleButtonGroup";
import ToggleButton from "react-bootstrap/ToggleButton";

export default function FilterBtn() {
    const [value, setValue] = useState([]);

    const options = ["끓이기", "삶기", "찌기", "굽기", "볶기", "튀기기"];

    const handleChange = (val) => {
        if (val.includes("전체")) {
            if (val.length === 7) {
                setValue([]);
            } else {
                setValue([...options]); // 전체 선택
            }
        } else {
            setValue(val);
        }
    };

    return (
        <div>
            <ToggleButtonGroup
                type="checkbox"
                value={value}
                onChange={handleChange}
            >
                {options.map((option, index) => (
                    <ToggleButton
                        key={index}
                        id={`tbg-btn-${index + 1}`}
                        value={option}
                    >
                        {option}
                    </ToggleButton>
                ))}
                <ToggleButton id="tbg-btn-all" key="all" value="전체">
                    ALL
                </ToggleButton>
            </ToggleButtonGroup>

            <ul>
                {value.map((v, idx) => (
                    <li key={idx}>{v}</li>
                ))}
            </ul>
        </div>
    );
}
