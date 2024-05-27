import React, { useContext, useState, useEffect } from "react";
import { RecipeFilterContext } from "../context/SearchProvider";

export default function SearchInd() {
    const { exclude, setExclude, include, setInclude } =
        useContext(RecipeFilterContext);

    return (
        <div style={{ display: "grid" }}>
            <div>
                <h1>포함</h1>
                <ul>
                    {include.map((item, idx) => (
                        <li key={idx}>{item}</li>
                    ))}
                </ul>
            </div>

            <div>
                <h1>제외</h1>
                <ul>
                    {exclude.map((item, idx) => (
                        <li key={idx}>{item}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
