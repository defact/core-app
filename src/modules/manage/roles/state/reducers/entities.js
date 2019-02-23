import { handleActions } from 'redux-actions';
import { createSelector } from 'reselect';
import { fetchEntities, fetchSuccess, fetchFailed } from '../actions/entities';

const initialState = {
  isFetching: false,
  isFetched: false,
  error: false,
  ids: [],
};

export default handleActions({
  [fetchEntities]: (state) => ({ ...state, isFetching: true, isFetched: false, error: false }),
  [fetchSuccess]: (state, action) =>
    ({ ...state, ids: action.payload.result, isFetching: false, isFetched: true, error: false }),
  [fetchFailed]: (state, action) => 
    ({ ...state, isFetching: false, isFetched: true, error: { message: action.payload.message }}),
  }, initialState);

const dataSelector = state => state.entities.entities;
const idsSelector = state => state.manage.roles.entities.ids;
  
export const entitiesSelector = createSelector(
  dataSelector, idsSelector, (entities = [], ids) => ids.map(id => entities[id])
);