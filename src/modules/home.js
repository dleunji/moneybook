import { handleActions, createAction } from 'redux-actions';
const CHANGE_TAB = 'home/CHANGE_TAB';

export const changeTab = createAction(CHANGE_TAB, (navTab) => navTab);

const initialState = {
  activeNavTab: 0,
};

const home = handleActions(
  {
    [CHANGE_TAB]: (state, { payload: navItem }) => ({
      ...state,
      activeNavTab: navItem,
    }),
  },
  initialState,
);
export default home;
