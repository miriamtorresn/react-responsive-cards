import * as types from "../actions/actionTypes";
import initialState from "./initialState";
import { ICardsReducerInterface } from '../../interfaces/store';


export default function cardsReducer(state = initialState.cardsReducer, action: ICardsReducerInterface) {
  switch (action.type) {
    // Updating card list
    case types.UPDATE_CARDS_LIST:
      return {
        ...state,
        cards: action.cards
      };

    // Updating loading status
    case types.UPDATE_LOADING_STATUS:
      return {
        ...state,
        loading: action.loading
      };
    // Default return of state
    default:
      return state;
  }
}

