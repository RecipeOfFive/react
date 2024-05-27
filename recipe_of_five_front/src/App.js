import "bootstrap/dist/css/bootstrap.min.css";
import SearchInd from "./components/SearchInd/SearchInd";
import Ranking from "./components/Ranking/Ranking";
import RecipeDescrip from "./components/RecipeDesc/RecipeDescrip"
import './App.css';
function App() {
    return (
        <div >
            {/* <div className="App">
                <SearchInd />
                <Ranking />
            </div> */}
            <div className="App">
                <RecipeDescrip />
            </div>
        </div>
    );
}

export default App;
