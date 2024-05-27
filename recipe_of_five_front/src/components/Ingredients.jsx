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
                        >
                            {item} X
                        </span>
                    ))}
                </div>
            </div>

            <div style={{ width: "30vw" }}>
                <h1>제외</h1>
                <ul
                    style={{
                        display: "grid",
                        gridTemplateColumns: "1fr 1fr",
                        gap: "10px",
                    }}
                >
                    {exclude.map((item, idx) => (
                        <li key={idx}>{item}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
