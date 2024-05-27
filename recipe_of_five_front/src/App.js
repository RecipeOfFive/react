import React, { createContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import SearchInd from "./components/SearchInd";
import FilterMethod from "./components/FilterMethod";

export const AppContext = createContext();

function App() {
    const searchOptions = {
        include: [],
        exclude: [],
        method: "",
    };
    return (
        <>
            <AppContext.Provider value={searchOptions}>
                <div className="App">
                    <SearchInd />
                    <FilterMethod />
                </div>
            </AppContext.Provider>
        </>
    );
}

export default App;
