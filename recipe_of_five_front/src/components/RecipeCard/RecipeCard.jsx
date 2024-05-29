import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Card, ListGroup, Button } from "react-bootstrap";
import { RecipeFilterContext } from "../../context/SearchProvider";
import "./style.css";
import axios from "axios";

export default function RecipeCard() {
    const { searchResult } = useContext(RecipeFilterContext);
    const navigate = useNavigate();
    return (
        <div>
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
                                onClick={() => {
                                    axios.get(
                                        `http://ec2-3-38-45-40.ap-northeast-2.compute.amazonaws.com:3000/api/food/like/${el.id}`
                                    );
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
