import React, { useContext, useState, useEffect } from "react";
import { RecipeFilterContext } from "../../context/SearchProvider";
import { Button } from "react-bootstrap";
import "./style.css";

export default function SearchInd() {
    const { exclude, setExclude, include, setInclude } =
        useContext(RecipeFilterContext);

    return (
        <div>
            <div style={{ display: "flex" }}>
                {include.map((item, idx) => (
                    <Button
                        key={idx}
                        onClick={() => {
                            setInclude((prev) =>
                                prev.filter((el) => el !== item)
                            );
                        }}
                        style={{ border: "2px solid black", height: "40px" }}
                    >
                        {item}
                    </Button>
                ))}
                <p>는 포함된</p>
            </div>

            <div>
                <div style={{ display: "flex" }}>
                    {exclude.map((item, idx) => (
                        <Button
                            key={idx}
                            onClick={() => {
                                setExclude((prev) =>
                                    prev.filter((el) => el !== item)
                                );
                            }}
                            style={{
                                border: "2px solid black",
                                height: "40px",
                            }}
                        >
                            {item}
                        </Button>
                    ))}
                    <p>는 제외된</p>
                </div>
            </div>
        </div>
    );
}
