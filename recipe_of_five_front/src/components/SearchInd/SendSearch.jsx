import React, { useContext, useEffect } from "react";
import { Button } from "react-bootstrap";

import { RecipeFilterContext } from "../../context/SearchProvider";
import axios from "axios";

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
    //버튼 클릭시 세부 홈페이지로 이동 예정
  };

  // 최초 랭킹 화면 get 요청
  useEffect(() => {
    axios
      .post(
        // 임시 url
        "http://ec2-3-38-45-40.ap-northeast-2.compute.amazonaws.com:3000/api/food/",
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

  // console.log("요청 :", searchOptions);
  // console.log("결과 :", searchResult);

  return (
    <div>
      <Button variant="danger" onClick={handleSearch}>
        검색
      </Button>
    </div>
  );
}
