import axios from "axios";
import React, { createContext, useCallback, useEffect } from "react";
import { useState } from "react";

export const RecipeFilterContext = createContext();

export default function SearchProvider({ children }) {
  const [searchOptions, setSearchOptions] = useState({
    order: "like_count",
    include: [],
    exclude: [],
    type: [],
  });

  //초기 ranking
  const [ranking, setRanking] = useState([]);

  const [isFirst, setIsFirst] = useState(true); // 최초 실행 여부
  const [isSearch, setIsSearch] = useState(false); // 최초 검색 여부

  const [filterMethod, setFilterMethod] = useState([]);
  const [include, setInclude] = useState([]);
  const [exclude, setExclude] = useState([]);
  const [searchResult, setSearchResult] = useState([]);

  const filterRecipe = useCallback(async () => {
    return await axios
      .post("https://pda.recipeoffive.site/api/food/", searchOptions)
      .then((resp) => {
        setSearchResult(resp.data);
      });
  }, [searchOptions]);
  useEffect(() => {
    filterRecipe();
  }, [searchOptions]);

  //value에 추후 state 추가
  return (
    <RecipeFilterContext.Provider
      value={{
        searchOptions,
        setSearchOptions,
        setSearchResult,
        filterMethod,
        setFilterMethod,
        include,
        setInclude,
        exclude,
        setExclude,
        ranking,
        setRanking,
        searchResult,
        filterRecipe,
        isFirst,
        setIsFirst,
        isSearch,
        setIsSearch,
      }}
    >
      {children}
    </RecipeFilterContext.Provider>
  );
}
