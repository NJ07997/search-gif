import { omit } from 'lodash';
import { ADD_FAVORITE_GIF, REMOVE_FAVORITE_GIF, VIEW_FAVORITES } from './types';

const INITIAL_STATE = {
  favoriteGifs: [],
};

export default function reducer(state = INITIAL_STATE, action = {}) {
  const { favoriteGifs } = state;
  const { type, payload } = action;

  switch(type) {
    case ADD_FAVORITE_GIF:
      return {
        ...state,
        favoriteGifs: { ...favoriteGifs, [payload.id]: payload }
      };

    case REMOVE_FAVORITE_GIF:
      return {
        ...state,
        favoriteGifs: omit(favoriteGifs, payload)
      };
      
    case VIEW_FAVORITES:
      return {
        ...state,
        isFavoritesView: !state.isFavoritesView,
      }            

    default:
      return state;
  }
};