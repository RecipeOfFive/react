import React, { useContext, useEffect } from "react";
import { Button } from "react-bootstrap";
import { RecipeFilterContext } from "../context/SearchProvider";
import axios from "axios";

export default function SendSearch() {
    const {
        searchOptions,
        setSearchOptions,
        filterMethod,
        include,
        exclude,
        ranking,
        setRanking,
    } = useContext(RecipeFilterContext);

    const handleSearch = () => {
        setSearchOptions({
            include: include,
            exclude: exclude,
            method: filterMethod,
        });
    };

    // 최초 랭킹 화면 get 요청
    useEffect(() => {
        axios.get("url", searchOptions).then((resp) => {
            setRanking(resp.data);
        });
    }, []);

    useEffect(() => {
        // 서버에 원하는 레시피를 전송
        // axios.get("url",searchOptions).then((resp) => {
        //     이 후 정보 처리;
        // });
    }, [searchOptions]);

    return (
        <div>
            <Button variant="danger" onClick={handleSearch}>
                검색
            </Button>
        </div>
    );
}
