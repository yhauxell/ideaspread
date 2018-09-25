const selectedCardReducer = (state = {}, action) => {
    switch (action.type) {
        case 'SELECT_CARD':
            return action.payload;
        default:
            return state;
    }
}

export default selectedCardReducer;