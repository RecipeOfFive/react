import React from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import SearchInd from "../../components/SearchInd/SearchInd";
import FilterBtn from "../../components/SearchInd/FilterBtn";
import Ingredients from "../../components/SearchInd/Ingredients";
import SendSearch from "../../components/SearchInd/SendSearch";
import RecipeResult from "../../components/RecipeResult/RecipeResult";
import Ranking from "../../components/Ranking/Ranking";
import RecipeCard from "../../components/RecipeCard/RecipeCard";
import { RecipeFilterContext } from "../../context/SearchProvider";
import { Row, Col, Container } from "react-bootstrap";

const Main = () => {
  const navigate = useNavigate();
  const { isFirst } = useContext(RecipeFilterContext);

  return (
    <div className="main">
      {/* right-side */}

      <Container fluid>
        <Row>
          <Col className="leftSide" xs={6}>
            <SearchInd />
            <Ingredients />
            <FilterBtn />
            <SendSearch />
          </Col>
          {/* // right-side */}

          <Col className="rightSide" xs={6}>
            {isFirst ? <Ranking /> : <RecipeCard />}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Main;
