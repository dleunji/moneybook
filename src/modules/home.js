import { handleActions, createAction } from 'redux-actions';
const CHANGE_TAB = 'home/CHANGE_TAB';
const CHANGE_ENTRY_STEP = 'home/CHANGE_ENTRY_STEP';
const CHANGE_ENTRY_OPTION = 'home/CHANGE_ENTRY_OPTION';
const CHANGE_ENTRY = 'home/CHANGE_ENTRY';

export const changeTab = createAction(CHANGE_TAB, navItem => navItem);
export const changeEntryStep = createAction(CHANGE_ENTRY_STEP, value => value);
export const changeEntryOption = createAction(CHANGE_ENTRY_OPTION, value => value);
export const changeEntryDate = createAction(CHANGE_ENTRY, date => date);

const initialState = {
  navItem: 0,
  activeEntryStep: 0,
  activeEntryOption: 0,
  entry:{
    date: null,
    amount: 0,
    note: ''
  }
};

const home = handleActions(
  {
    [CHANGE_TAB]: (state, { payload: navItem }) => ({
      ...state,
      navItem: navItem,
    }),
    [CHANGE_ENTRY_STEP]: (state, {payload: value}) => ({
      ...state,
      activeEntryStep: value
    }),
    [CHANGE_ENTRY_OPTION]: (state, {payload: value}) => ({
      ...state,
      activeEntryOption: value
    }),
    [CHANGE_ENTRY]: (state, {payload: {name, value}}) => ({
      ...state,
      entry: {...state.entry, [name]: value}
    })
  },
  initialState,
);
export default home;
