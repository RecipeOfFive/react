import React, { useContext, useEffect } from "react";
import { Button } from "react-bootstrap";
import { RecipeFilterContext } from "../../context/SearchProvider";
import axios from "axios";
import "./style.css";

export default function SendSearch() {
  const {
    searchOptions,
    setSearchOptions,
    filterMethod,
    include,
    exclude,
    setRanking,
    searchResult,
    filterRecipe,
    setIsFirst,
  } = useContext(RecipeFilterContext);

  const handleSearch = () => {
    setSearchOptions({
      order: "like_count",
      include: include,
      exclude: exclude,
      type: filterMethod,
    });
    setIsFirst(false);
  };

  // 최초 랭킹 화면 get 요청
  useEffect(() => {
    axios
      .post(
        // 임시 url
        "https://pda.recipeoffive.site/api/food/",
        searchOptions
      )
      .then((resp) => {
        setRanking(resp.data);
      });
  }, []);

  useEffect(() => {
    //searchResult 결과
    filterRecipe();
  }, [searchOptions]);

  return (
    <div className="search-btn-div">
      <Button className="custom-search-button" onClick={handleSearch}>
        맛있는 레시피 찾기
      </Button>
    </div>
  );
}
