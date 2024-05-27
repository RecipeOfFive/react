import React, { createContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import SearchInd from "./components/SearchInd";
import FilterBtn from "./components/FilterBtn";
import SearchProvider from "./context/SearchProvider";
import Ingredients from "./components/Ingredients";

export const AppContext = createContext();

function App() {
    return (
        <>
            <SearchProvider>
                <div className="App">
                    <SearchInd />
                    <FilterBtn />
                    <Ingredients />
                </div>
            </SearchProvider>
        </>
    );
}

export default App;
