import * as types from "../actions/actionTypes";
import initialState from "./initialState";
import { ICategoriesReducerInterface } from '../../interfaces/store';


export default function categoriesReducer(state = initialState.categoriesReducer.categories, action: ICategoriesReducerInterface) {
  switch (action.type) {
    // Updating categories
    case types.UPDATE_CARDS_CATEGORIES:
      return action.categories ? {
        ...state,
        categories: action.categories
      } : state;
    // Default return of state
    default:
      return state;
  }
}

