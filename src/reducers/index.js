const initialState = {
    cards: [],
    loading: true,
    currentScore: 1,
    maxScore: 0,
    uniqIdLine: [],
    hasError: false,
};

const reducers = (state = initialState, action) => {
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
            console.log(newItemId.id);
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
            else {
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
        default:
            return {
                state
            };
    }
}

// Action Creators:

export const cardsLoaded = (newCards) => {
    return {
        type: 'CARDS_LOADED',
        payload: newCards
    }
}

export const cardsRequested = () => {
    return {
        type: 'CARDS_REQUESTED'
    }
}

export const currentScoreChangeAC = (id) => {
    return {
        type: 'ITEM_ADD_TO_MEMORY',
        payload: id
    }
}

export default reducers;