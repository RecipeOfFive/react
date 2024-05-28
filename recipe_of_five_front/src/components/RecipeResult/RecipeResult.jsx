import React, { useContext } from "react";
import { RecipeFilterContext } from "../../context/SearchProvider";
import Button from "react-bootstrap/Button";

export default function RecipeResult() {
    const { exclude, include } = useContext(RecipeFilterContext);
    const colors = ["success", "warning", "danger", "secondary"];
    return (
        <div>
            <div className="include-ingred">
                <ul>
                    {include.map((ingredient, index) => (
                        <li key={index}>
                            <Button variant={colors[index % colors.length]}>
                                {ingredient}
                            </Button>
                        </li>
                    ))}
                </ul>
                <span>는 포함된,</span>
            </div>

            <div className="exclude-ingred">
                <ul>
                    {exclude.map((ingredient, index) => (
                        <li key={index}>
                            <Button variant={colors[index % colors.length]}>
                                {ingredient}
                            </Button>
                        </li>
                    ))}
                </ul>
                <span>는 제외된 레시피입니다.</span>
            </div>
        </div>
    );
}
