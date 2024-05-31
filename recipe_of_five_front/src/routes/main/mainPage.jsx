import React from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import SearchInd from "../../components/SearchInd/SearchInd";
import FilterBtn from "../../components/SearchInd/FilterBtn";
import Ingredients from "../../components/SearchInd/Ingredients";
import SendSearch from "../../components/SearchInd/SendSearch";
import RecipeResult from "../../components/RecipeResult/RecipeResult";
import Ranking from "../../components/Ranking/Ranking";
import RecipeCard from "../../components/RecipeCard/RecipeCard";
import { RecipeFilterContext } from "../../context/SearchProvider";
import { Row, Col, Container } from "react-bootstrap";
import "./style.css";

const Main = () => {
  const navigate = useNavigate();
  const { isFirst, isSearch } = useContext(RecipeFilterContext);

  return (
    <div>
      {/* right-side */}
      <SearchInd />
      {/* <Ingredients /> */}

      {isSearch && <Ingredients />}

      <div className="filterBtn-search">
        <FilterBtn />
        <SendSearch />
      </div>

      {/* right-side */}
      {isFirst ? <Ranking /> : <RecipeCard />}
    </div>
  );
};

export default Main;
