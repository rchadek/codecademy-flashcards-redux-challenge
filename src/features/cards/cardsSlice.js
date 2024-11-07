import { createSlice } from '@reduxjs/toolkit';

export const cardsSlice = createSlice({
    name: "cards",
    initialState: {
        cards: {}
    },
    reducers: {
        'addCard': (state, action) => {
            const {id, front, back} = action.payload;
            state.cards[id] = { front, back };
        }

    }

});

export const selectCardById = (state, cardId) => state.cards.cards[cardId];

export const { addCard } = cardsSlice.actions;
export default cardsSlice.reducer;