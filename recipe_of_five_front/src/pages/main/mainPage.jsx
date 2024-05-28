import React, { createContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import SearchInd from "./components/SearchInd";
import FilterBtn from "./components/FilterBtn";
import SearchProvider from "./context/SearchProvider";
import Ingredients from "./components/Ingredients";
import SendSearch from "./components/SendSearch";

export const AppContext = createContext();

function mainPage() {
    return (
        <>
            <SearchProvider>
                <div>
                    <SearchInd />
                    <FilterBtn />
                    <Ingredients />
                    <SendSearch />
                </div>
            </SearchProvider>
        </>
    );
}

export default mainPage;
