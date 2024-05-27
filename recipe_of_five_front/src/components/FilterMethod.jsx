export default function FilterMethod() {
    /*
    btncheck1: 끓이기
    btncheck2: 삶기
    btncheck3: 찌기
    btncheck4: 굽기
    btncheck5: 볶기
    btncheck6: 튀기기
    btncheck7: 기타
    */
    return (
        <div>
            <div
                class="btn-group"
                role="group"
                aria-label="Basic checkbox toggle button group"
            >
                <input
                    type="checkbox"
                    class="btn-check"
                    id="btncheck1"
                    autocomplete="off"
                />
                <label class="btn btn-outline-primary" for="btncheck1">
                    끓이기
                </label>

                <input
                    type="checkbox"
                    class="btn-check"
                    id="btncheck2"
                    autocomplete="off"
                />
                <label class="btn btn-outline-primary" for="btncheck2">
                    삶기
                </label>

                <input
                    type="checkbox"
                    class="btn-check"
                    id="btncheck3"
                    autocomplete="off"
                />
                <label class="btn btn-outline-primary" for="btncheck3">
                    찌기
                </label>

                <input
                    type="checkbox"
                    class="btn-check"
                    id="btncheck4"
                    autocomplete="off"
                />
                <label class="btn btn-outline-primary" for="btncheck4">
                    굽기
                </label>

                <input
                    type="checkbox"
                    class="btn-check"
                    id="btncheck5"
                    autocomplete="off"
                />
                <label class="btn btn-outline-primary" for="btncheck5">
                    볶기
                </label>

                <input
                    type="checkbox"
                    class="btn-check"
                    id="btncheck6"
                    autocomplete="off"
                />
                <label class="btn btn-outline-primary" for="btncheck6">
                    튀기기
                </label>

                <input
                    type="checkbox"
                    class="btn-check"
                    id="btncheck7"
                    autocomplete="off"
                />
                <label class="btn btn-outline-primary" for="btncheck7">
                    기타
                </label>
            </div>
        </div>
    );
}
