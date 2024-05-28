import React, { useContext } from "react";
import { Card, ListGroup } from "react-bootstrap";
import { RecipeFilterContext } from "../../context/SearchProvider";
import "./style.css";

export default function RecipeCard() {
    const { searchResult } = useContext(RecipeFilterContext);
    return (
        <div>
            <div>
                <Card style={{ width: "18rem" }}>
                    {/* <Card.Img variant="top" src="holder.js/100px180?text=Image cap" /> */}

                    <img src="https://recipe1.ezmember.co.kr/cache/recipe/2023/05/16/2b22d07bbb6ac9d0ee4c0438691819161.jpg"></img>
                    <ListGroup className="list-group-flush">
                        <Card.Title>Title</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title
                            and make up the bulk of the card's content.
                        </Card.Text>
                    </ListGroup>
                    <Card.Body className="text-align">
                        <Card.Link href="#">Like : 5</Card.Link>
                        <Card.Link href="#">ViewCount : 4</Card.Link>
                    </Card.Body>
                </Card>
            </div>

            {searchResult.map((el, index) => {
                if (index === 10) return;
                return (
                    <Card key={index} style={{ width: "18rem" }}>
                        <img src={el.main_image}></img>
                        <ListGroup className="list-group-flush">
                            <Card.Title>{el.name}</Card.Title>
                            <Card.Text>{el.description}</Card.Text>
                        </ListGroup>
                        <Card.Body className="text-align">
                            <Card.Link>Like : {el.likeCount}</Card.Link>
                            <Card.Link>ViewCount : {el.view_count}</Card.Link>
                        </Card.Body>
                    </Card>
                );
            })}
        </div>
    );
}
