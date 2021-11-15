
import * as types from "./actionTypes";
import { ICard } from '../../interfaces/card';
import { ICategory } from '../../interfaces/category';

export function updateCategories(categories: ICategory[]) {
  return { type: types.UPDATE_CARDS_CATEGORIES, categories };
}

export function loadCategories() {
  return function (dispatch: any, getState: any) {
    const { cards } = getState().cardsReducer;
    const tags: ICategory[] = cards
      // Getting tags from cards list
      .map((card: ICard) => card.tags)
      // Joining every tag in the same level
      .flat();

    // Removing duplicated tags
    const categories: ICategory[] = tags
      .reduce((accumulator: ICategory[], category: ICategory) => {
        const alreadyExists = accumulator.some((_category: ICategory) => _category.id === category.id);
        if (!alreadyExists) accumulator.push(category);
        return accumulator;
      }, []);

    // Dispatching action to update store
    dispatch(updateCategories(categories));
  };
}
