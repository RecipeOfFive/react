import logo from "./logo.svg";
import {Provider} from 'react-redux';
import store from './store';
import "bootstrap/dist/css/bootstrap.min.css";
import SearchInd from "./components/SearchInd";

function App() {
    return (
            <Provider store={store} >
                <SearchInd />
            </Provider>
    );
}

export default App;
