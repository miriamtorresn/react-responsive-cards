import { IStore } from '../../interfaces/store';

const store: IStore = {
	cardsReducer: {
		cards: [],
		loading: true
	},
	categoriesReducer: {
		categories: [],
	}
}

export default store;
