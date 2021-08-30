// Action Creators:

export const cardsLoaded = (newCards) => {
    return (dispatch) => {
        dispatch({
            type: 'CARDS_LOADED',
            payload: newCards
        })
    }
}

export const cardsRequested = () => {
    return (dispatch) => {
        dispatch({
            type: 'CARDS_REQUESTED'
        })
    }
}

export const currentScoreChangeAC = (id) => {
    return (dispatch) => {
        dispatch({
            type: 'ITEM_ADD_TO_MEMORY',
            payload: id
        })
    }
}