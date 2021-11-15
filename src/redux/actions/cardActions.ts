import 'axios';
import axios from 'axios';
import * as types from "./actionTypes";
import siteConfigurations from '../../configs/site_configurations';
import { ICard } from '../../interfaces/card';
import { getMachineName } from '../../js/utils';


export function updateCardsList(cards: ICard[]) {
  return { type: types.UPDATE_CARDS_LIST, cards };
}

export function updateLoadingStatus(loading: boolean) {
  return { type: types.UPDATE_LOADING_STATUS, loading };
}

export function loadCards() {
  return function (dispatch: any) {
    return axios.get(`${siteConfigurations.apiEndpoint}/fe-code-challenge.json`)
      .then(res => {
        const cards: ICard[] = res.data.cards.map((card: any) => {
          card.tags = card.tags.map((_category: string) => (
            {
              name: _category,
              id: getMachineName(_category)
            }
          ));
          card.featured = Boolean(card.featured);
          return card;
        })
        dispatch(updateCardsList(cards));
        dispatch(updateLoadingStatus(false));
      })
      .catch(error => {
        dispatch(updateCardsList([]));
        console.error(error);
        throw error;
      });
  };
}
