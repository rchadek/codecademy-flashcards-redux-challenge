import { createSlice } from "@reduxjs/toolkit";
import { addQuiz } from "../quizzes/quizzesSlice";

export const topicsSlice = createSlice({
  name: "topics",
  initialState: {
    topics: {},
  },
  reducers: {
    addTopic: (state, action) => {
        const {id, name, icon} = action.payload;
        if(id) {
            state.topics[id] = { id, name, icon, quizIds:[] };
        }
        else {
            console.error('Topic ID is undefined');
        }
    }
  },
  extraReducers: (builder) => {
    builder.addCase(addQuiz.fulfilled, (state, action) => {
        const { id, topicId } = action.payload;
        if (state.topics[topicId]) {
            state.topics[topicId].quizIds.push(id);
        }
    });
  }
});

export const selectTopics = (state) => state.topics.topics;

export const { addTopic } = topicsSlice.actions;
export default topicsSlice.reducer;

