import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, ListGroup, Button } from "react-bootstrap";
import { RecipeFilterContext } from "../../context/SearchProvider";
import "./style.css";
import axios from "axios";

export default function RecipeCard() {
    const { searchResult, searchOptions, setSearchOptions } =
        useContext(RecipeFilterContext);
    const navigate = useNavigate();

    const [currBtn, setCurrBtn] = useState("좋아요");

    function handleOrder() {
        if (searchOptions.order === "like_count") {
            setCurrBtn("조회수");
        } else {
            setCurrBtn("좋아요");
        }
        setSearchOptions((prevOptions) => {
            return {
                ...prevOptions,
                order:
                    searchOptions.order === "like_count"
                        ? "view_count"
                        : "like_count",
            };
        });
    }
    return (
        <div>
            <div>
                <Button onClick={handleOrder}>{currBtn}</Button>
            </div>
            {searchResult.map((el, index) => {
                if (index === 10) return;
                return (
                    <Card key={index} style={{ width: "18rem" }}>
                        <img
                            src={el.main_image}
                            onClick={() => navigate(`/${el.id}`)}
                        ></img>
                        <ListGroup className="list-group-flush">
                            <Card.Title>{el.name}</Card.Title>
                            <Card.Text onClick={() => navigate(`/${el.id}`)}>
                                {el.description}
                            </Card.Text>
                        </ListGroup>
                        <Card.Body className="text-align">
                            <p>좋아요: {el.like_count}</p>
                            <br />
                            <p>조회수 : {el.view_count}</p>
                        </Card.Body>
                    </Card>
                );
            })}
        </div>
    );
}
