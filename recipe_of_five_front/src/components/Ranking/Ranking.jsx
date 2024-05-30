import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Card from "react-bootstrap/Card";
import { RecipeFilterContext } from "../../context/SearchProvider";
import "./style.css";
export default function Ranking() {
    // const 값 가져오기
    //
    // 4개를 띄우는데 map 사용해서 4개 띄우기.
    const { ranking } = useContext(RecipeFilterContext);
    // searchOptions = 검색한 레시피 데이터들 저장
    const navigate = useNavigate();
    return (
        <div className="ranking">
            <h1 className="ranking-title"> 랭킹 </h1>
            <div className="rank-list">
                {ranking.map((recipe, index) => (
                    <Card
                        border="warning"
                        key={index}
                        onClick={() => navigate(`/detail/${recipe.id}`)}
                        className="item-card"
                    >
                        <Card.Body className="item-location">
                            <div>
                                <Card.Img
                                    variant="top"
                                    src={recipe.main_image}
                                    className="item-image"
                                />
                            </div>
                            <Card.Subtitle className="item-title">
                                {recipe.name}
                            </Card.Subtitle>
                            <div className="like-view-div">
                                <span className="like-view">❤️좋아요 </span>
                                <span className="like-view-count">
                                    {recipe.like_count}{" "}
                                </span>
                                <span className="like-view">👀조회수 </span>
                                <span className="like-view-count">
                                    {recipe.view_count}{" "}
                                </span>
                            </div>
                        </Card.Body>
                    </Card>
                ))}
            </div>
        </div>
    );
}
