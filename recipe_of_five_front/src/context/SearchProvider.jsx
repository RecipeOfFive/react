import React, { createContext, useCallback, useEffect } from "react";
import { useState } from "react";

export const RecipeFilterContext = createContext();

export default function SearchProvider({ children }) {
    const [searchOptions, setSearchOptions] = useState({
        include: [],
        exclude: [],
        method: [],
    });
    const [filterMethod, setFilterMethod] = useState([]);
    const [include, setInclude] = useState([]);
    const [exclude, setExclude] = useState([]);
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
                include,
                setInclude,
                exclude,
                setExclude,
            }}
        >
            {children}
        </RecipeFilterContext.Provider>
    );
}
