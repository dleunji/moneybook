import { handleActions, createAction } from 'redux-actions';
const CHANGE_TAB = 'home/CHANGE_TAB';
const CHANGE_STEP = 'home/CHANGE_STEP';

export const changeTab = createAction(CHANGE_TAB, (navItem) => navItem);
export const changeStep = createAction(CHANGE_STEP, (value) => value);

const initialState = {
  navItem: 0,
  activeStep: 0
};

const home = handleActions(
  {
    [CHANGE_TAB]: (state, { payload: navItem }) => ({
      ...state,
      navItem: navItem,
    }),
    [CHANGE_STEP]: (state, {payload: value}) => ({
      ...state,
      activeStep: value
    })
  },
  initialState,
);
export default home;
