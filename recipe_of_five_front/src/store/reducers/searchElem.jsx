import { createSlice } from "@reduxjs/toolkit";


//검색 값 타입 지정하기
// initial state
const initialState = {
  counter: 0,
  color: "black",
};

const searchElemSlice = createSlice({
  name: "searchElem",
  initialState: initialState,
  reducers: {
    increaseCounter: (state) => {
      state.counter += 1;
    },
    decreaseCounter: (state) => {
      state.counter -= 1;
    },
    setColor: (state, action) => {
      state.color = action.payload.color;
    },
  },
});
export const { increaseCounter, decreaseCounter, setColor } = searchElemSlice.actions; //변수명 바꿔주기

export default searchElemSlice.reducer;