import React, { createContext, useCallback, useEffect } from "react";
import { useState } from "react";
import axios from "axios";

export const RecipeFilterContext = createContext();

export default function SearchProvider({ children }) {
    const [searchOptions, setSearchOptions] = useState({
        include: [],
        exclude: [],
        method: [],
    });
    const [filterMethod, setFilterMethod] = useState([]);
    // const [searchResult, setSearchResult] = [];

    // const filterRecipe = () => {
    //     axios
    //         .get("url", {
    //             params: searchOptions,
    //         })
    //         .then((resp) => {
    //             setSearchResult(resp.data);
    //         });
    // };

    //value에 추후 state 추가
    return (
        <RecipeFilterContext.Provider
            value={{
                searchOptions,
                setSearchOptions,
                filterMethod,
                setFilterMethod,
            }}
        >
            {children}
        </RecipeFilterContext.Provider>
    );
}
