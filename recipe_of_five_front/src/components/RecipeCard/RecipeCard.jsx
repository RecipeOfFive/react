import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, ListGroup, Button } from "react-bootstrap";
import { RecipeFilterContext } from "../../context/SearchProvider";
import "./style.css";
import axios from "axios";

export default function RecipeCard() {
    const {
        searchResult,
        searchOptions,
        setSearchOptions,
        filterRecipe,
        setSearchResult,
    } = useContext(RecipeFilterContext);
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
                            <Button
                                variant="primary"
                                onClick={async (e) => {
                                    e.preventDefault();
                                    e.stopPropagation();
                                    const resp = await axios.get(
                                        `http://ec2-3-38-45-40.ap-northeast-2.compute.amazonaws.com:3000/api/food/like/${el.id}`
                                    );
                                    if (resp.status !== 204) {
                                        // error 처리
                                    } else {
                                        setSearchResult((prev) => {
                                            const newResult = [...prev];
                                            newResult[index].like_count += 1;
                                            return newResult;
                                        });
                                    }
                                }}
                            >
                                좋아요
                            </Button>
                            {el.like_count}
                            <br />
                            <p>조회수 : {el.view_count}</p>
                        </Card.Body>
                    </Card>
                );
            })}
        </div>
    );
}
