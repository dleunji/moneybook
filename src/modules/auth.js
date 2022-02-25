import { createAction, handleActions } from 'redux-actions';

const INITIALIZE_USER_LIST = 'auth/INITIALIZE_USER_LIST';
const CHANGE_USER = 'auth/CHANGE_USER';

export const refreshUserList = createAction(INITIALIZE_USER_LIST, users => users);
export const changeUser = createAction(CHANGE_USER, user => user);

const initialState = {
  userList: [
    {
      userId: 0,
      userFirstName: '은지',
      userLastName: '이',
    },
    {
      userId: 1,
      userFirstName: '길동',
      userLastName: '홍',
    },
    {
      userId: 2,
      userFirstName: '우치',
      userLastName: '전',
    },
    {
      userId: 4,
      userFirstName: '사람',
      userLastName: '눈',
    },
  ],
  currentUser: null,
};
const auth = handleActions({
  [INITIALIZE_USER_LIST]:(state, {payload: users}) => ({
    userList : users
  }),
  [CHANGE_USER]:(state, {payload: user}) => ({
    ...state,
    currentUser: user
  })
}, initialState);

export default auth;
