import { createAction, handleActions } from 'redux-actions';

const CHANGE_PERIOD_TAB = 'history/CHANGE_PERID_TAB';

export const changePeriodTab = createAction(CHANGE_PERIOD_TAB, (tab) => tab);
const initialState = {
  periodTab: 0,
};

const history = handleActions({
  [CHANGE_PERIOD_TAB]: (state, { payload: tab }) => ({
    ...state,
    periodTab: tab,
  }),
}, initialState
);

export default history;
