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

  const [filterMethod, setFilterMethod] = useState([]);
  const [include, setInclude] = useState([]);
  const [exclude, setExclude] = useState([]);
  const [order, setOrder] = useState("LIKECOUNT");

  const [searchResult, setSearchResult] = [];

  const filterRecipe = () => {
    axios
      .post(
        // 임시 url
        "http://ec2-3-38-45-40.ap-northeast-2.compute.amazonaws.com:3000/api/food/",
        {
          params: searchOptions,
        }
      )
      .then((resp) => {
        setSearchResult(resp.data);
      });
  };

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
        ranking,
        setRanking,
      }}
    >
      {children}
    </RecipeFilterContext.Provider>
  );
}
