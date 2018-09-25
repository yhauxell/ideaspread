import { combineReducers } from 'redux';
import cardsReducer from './cardsReducer';
import selectedCardReducer from './selectedCardReducer';

const rootReducers = combineReducers({
    cards: cardsReducer,
    selectedCard: selectedCardReducer
})

export default rootReducers;
