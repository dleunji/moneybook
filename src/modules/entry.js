import { createAction, handleActions } from 'redux-actions';

const CHANGE_STEP = 'entry/CHANGE_ENTRY_STEP';
const CHANGE_OPTION = 'entry/CHANGE_ENTRY_OPTION';
const CHANGE_ENTRY = 'entry/CHANGE_ENTRY';

export const changeStep = createAction(CHANGE_STEP, (value) => value);
export const changeOption = createAction(CHANGE_OPTION, (value) => value);
export const changeEntry = createAction(CHANGE_ENTRY, (value) => value);

const initialState = {
  activeStep: 0,
  activeOption: 0,
  entry: {
    date: null,
    amount: 0,
    note: '',
  },
};

const entry = handleActions(
  {
    [CHANGE_STEP]: (state, { payload: value }) => ({
      ...state,
      activeStep: value,
    }),
    [CHANGE_OPTION]: (state, { payload: value }) => ({
      ...state,
      activeOption: value,
    }),
    [CHANGE_ENTRY]: (state, { payload: { name, value } }) => ({
      ...state,
      entry: { ...state.entry, [name]: value },
    }),
  },
  initialState,
);

export default entry;
