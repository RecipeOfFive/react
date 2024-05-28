import React, { createContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import SearchInd from "./components/SearchInd/SearchInd";
import Ranking from "./components/Ranking/Ranking";
import RecipeDescrip from "./components/RecipeDesc/RecipeDescrip";
import FilterBtn from "./components/SearchInd/FilterBtn";
import SearchProvider from "./context/SearchProvider";
import Ingredients from "./components/SearchInd/Ingredients";
import SendSearch from "./components/SearchInd/SendSearch";
import RecipeResult from "./components/RecipeResult/RecipeResult";
import RecipeCard from "./components/RecipeCard/RecipeCard";

export const AppContext = createContext();

function App() {
    return (
        <>
            <SearchProvider>
                <div className="App">
                    <SearchInd />
                    <FilterBtn />
                    <Ingredients />

                    <RecipeResult />
                    <SendSearch />

                    <Ranking />

                    <RecipeCard />
                </div>
            </SearchProvider>
        </>
    );
}

export default App;
