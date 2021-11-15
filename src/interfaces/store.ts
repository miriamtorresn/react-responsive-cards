import { ICard } from './card';
import { ICategory } from './category';

export interface ICardsReducerInterface {
  type: string;
  cards?: ICard[];
  loading?: boolean;
};

export interface ICategoriesReducerInterface {
  type: string;
  categories: ICategory[];
}

export interface IStore {
  cardsReducer: {
    cards: ICard[];
    loading: boolean;
  }
  categoriesReducer: {
    categories: ICategory[];
  }
}
