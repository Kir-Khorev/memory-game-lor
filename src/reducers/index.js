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
            // Найти элемент у которого id == пришедшему id:
            const newItemId = state.cards.find(item => item.id === id);
            console.log(newItemId.id);
            const nonUniq = state.uniqIdLine.includes(newItemId);

            // Если id элемент ЕСТЬ в uniqIdLine
            if (nonUniq) {
                // GameOver
                console.log('Game Over', newItemId);
                alert(`GameOver: ${newItemId.text} was alredy`)

                return {
                    ...state,
                    uniqIdLine: [],
                    currentScore: 0
                }

            }
            // Если id элемента НЕТ в uniqIdLine
            else {
                console.log('Game continue');
                console.log('Current Score:', state.currentScore);
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