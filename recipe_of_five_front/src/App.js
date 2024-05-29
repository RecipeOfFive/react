import React, { createContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import SearchProvider from "./context/SearchProvider";
import { RouterProvider } from "react-router-dom";
import mainRouter from "./mainRouter";

export const AppContext = createContext();

function App() {
  return (
    <>
      <SearchProvider>
        <RouterProvider router={mainRouter} />
      </SearchProvider>
    </>
    // <>
    //     <SearchProvider>
    //         <div className="App">
    //             <

    //             <RecipeCard />

    //             <RecipeDescrip />
    //         </div>
    //     </SearchProvider>
    // </>
  );
}

export default App;
