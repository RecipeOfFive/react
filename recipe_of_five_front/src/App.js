import React, { createContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";

import SearchInd from "./components/SearchInd/SearchInd";
import Ranking from "./components/Ranking/Ranking";
import RecipeDescrip from "./components/RecipeDesc/RecipeDescrip";
import FilterBtn from "./components/SearchInd/FilterBtn";
import SearchProvider from "./context/SearchProvider";
import Ingredients from "./components/SearchInd/Ingredients";
import SendSearch from "./components/SearchInd/SendSearch";
import RecipeResult from "./components/RecipeResult/RecipeResult";

export const AppContext = createContext();

function App() {
  return (
    <>
      <SearchProvider>
        <div className="App">
          <Container fluid>
            <Row>
              <Col xs={6} md={6}>
                <SearchInd />
                <FilterBtn />
                <Ingredients />
                <SendSearch />
              </Col>
              <Col xs={6} md={6}>
                {/* (검색이 실행함 -> true/false ? <검색 결과 /> : <Ranking /> ) */}
                <RecipeResult />
                <Ranking />
              </Col>
            </Row>
          </Container>
        </div>
      </SearchProvider>
    </>
  );
}

export default App;
