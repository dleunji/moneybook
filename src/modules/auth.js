import { createAction, handleActions } from 'redux-actions';

const INITIALIZE_USER_LIST = 'auth/INITIALIZE_USER_LIST';
const CHANGE_USER = 'auth/CHANGE_USER';
const DELETE_USER = 'auth/DELETE_USER';

export const refreshUserList = createAction(INITIALIZE_USER_LIST, users => users);
export const changeUser = createAction(CHANGE_USER, user => user);
export const deleteUser = createAction(DELETE_USER, userId => userId);

const initialState = {
  userList: [
    {
      userId: 4,
      userFirstName: '은지',
      userLastName: '이',
    },
    {
      userId: 12,
      userFirstName: '길동',
      userLastName: '홍',
    },
    {
      userId: 23,
      userFirstName: '우치',
      userLastName: '전',
    },
    {
      userId: 44,
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
  }),
  [DELETE_USER]: (state, {payload: userId}) => ({
    ...state,
    userList: state.userList.filter((user)=> user.userId != userId)
  })
}, initialState);

export default auth;
