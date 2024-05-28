
import React, { createContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import SearchInd from "./components/SearchInd";
import Ranking from "./components/Ranking/Ranking";
import RecipeDescrip from "./components/RecipeDesc/RecipeDescrip"
import FilterBtn from "./components/FilterBtn";
import SearchProvider from "./context/SearchProvider";
import Ingredients from "./components/Ingredients";
import SendSearch from "./components/SendSearch";
import RecipeResult from "./components/RecipeResult/RecipeResult";

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
                </div>
            </SearchProvider>
        </>

    );
}

export default App;
