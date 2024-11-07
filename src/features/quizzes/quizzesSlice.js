import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const addQuiz = createAsyncThunk(
    'quizzes/addQuiz',
    async (quizData, thunkAPI) => {
        return quizData;
    }
);

export const quizzesSlice = createSlice({
    name: "quizzes",
    initialState: {
        quizzes: {}
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(addQuiz.fulfilled, (state, action) => {
          const { id, name, topicId, cardIds } = action.payload;
          state.quizzes[id] = { id, name, topicId, cardIds };
        });
    },
});

export const selectQuizzes = (state) => state.quizzes.quizzes;

export default quizzesSlice.reducer;
