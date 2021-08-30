const initialState = {
    cards: [5, 6],
    loading: true,
    currentScore: 5,
    maxScore: 25,
    uniqIdLine: [],
    hasError: false,
    popup: ''
};

const accountReducers = (state = initialState, action) => {
    switch (action.type) {
        case 'CARDS_LOADED': {
            return {
                ...state,
                cards: action.payload,
                loading: false
            }
        }
        case 'CARDS_REQUESTED':
            return {
                ...state,
                cards: state.cards,
                loading: true,
                uniqIdLine: [],
                currentScore: 0,
                maxScore: 0
            }
        case 'ITEM_ADD_TO_MEMORY':
            const id = action.payload;

            // Find element with id == come id:
            const newItemId = state.cards.find(item => item.id === id);
            const nonUniq = state.uniqIdLine.includes(newItemId);

            // If id element there is IN uniqIdLine
            if (nonUniq) {
                // GameOver
                alert(`GameOver: ${newItemId.text} was alredy`)
                return {
                    ...state,
                    uniqIdLine: [],
                    currentScore: 0
                }
            }

            // If id element no IN uniqIdLine
            if (!nonUniq) {
                // If win game
                if ((state.uniqIdLine.length + 1) === state.maxScore) {
                    alert(`You win!`)
                    return {
                        ...state,
                        currentScore: state.currentScore
                    }
                }
                return {
                    ...state,
                    uniqIdLine: [
                        ...state.uniqIdLine,
                        newItemId
                    ],
                    maxScore: state.cards.length,
                    currentScore: state.currentScore + 1
                }
            }
            break;
        default:
            return {
                state
            };
    }
}

// // Action Creators:

// export const cardsLoaded = (newCards) => {
//     return {
//         type: 'CARDS_LOADED',
//         payload: newCards
//     }
// }

// export const cardsRequested = () => {
//     return {
//         type: 'CARDS_REQUESTED'
//     }
// }

// export const currentScoreChangeAC = (id) => {
//     return {
//         type: 'ITEM_ADD_TO_MEMORY',
//         payload: id
//     }
// }

export default accountReducers;