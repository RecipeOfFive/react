import React, { createContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import SearchInd from "./components/SearchInd";
import FilterMethod from "./components/FilterMethod";
import SearchProvider from "./context/SearchProvider";

export const AppContext = createContext();

function App() {
    return (
        <>
            <SearchProvider>
                <div className="App">
                    <SearchInd />
                    <FilterMethod />
                </div>
            </SearchProvider>
        </>
    );
}

export default App;
