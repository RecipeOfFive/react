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

const Main = () => {
    const navigate = useNavigate();
    const { isFirtst, setIsFirst } = useContext(RecipeFilterContext);

    return (
        <div>
            <SearchInd />
            <FilterBtn />
            <Ingredients />
            <SendSearch />

            <RecipeResult />

            {/* Ranking -> 검색시 display: none으로 바꾸기 */}
            {/* {isFirtst ? <Ranking /> : <RecipeCard />} */}
            <Ranking />
            <RecipeCard />
        </div>
    );
};

export default Main;
