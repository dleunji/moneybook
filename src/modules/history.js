import { createAction, handleActions } from 'redux-actions';

const CHANGE_PERIOD_TAB = 'history/CHANGE_PERID_TAB';
const CHANGE_DATE = 'history/CHANGE_DATE';
const CHANGE_PAGE = 'history/CHANGE_PAGE';
const CHANGE_ROWS_PER_PAGE = 'history/CHANGE_ROWS_PER_PAGE';

export const changePeriodTab = createAction(CHANGE_PERIOD_TAB, tab => tab);
export const changeDate = createAction(CHANGE_DATE, date => date);
export const changePage= createAction(CHANGE_PAGE, page => page);
export const changeRowsPerPage = createAction(CHANGE_ROWS_PER_PAGE, rowsPerPage => rowsPerPage);

const initialState = {
  periodTab: 0,
  page:0,
  PerDate:null,
  PerYear:null,
  PerWeek:null,
  rowsPerPage: 10,
};

const history = handleActions({
  [CHANGE_PERIOD_TAB]: (state, { payload: tab }) => ({
    ...state,
    periodTab: tab,
  }),
  [CHANGE_DATE]: (state, {payload: {name, value}}) => ({
    ...state,
    [name]: value
  }),
  [CHANGE_PAGE]: (state, {payload: page}) => ({
    ...state,
    page
  }),
  [CHANGE_ROWS_PER_PAGE]: (state, {payload : rowsPerPage}) => ({
    ...state,
    rowsPerPage
  })
}, initialState
);

export default history;
