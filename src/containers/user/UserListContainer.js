import React from 'react';
import UserList from '../../components/user/UserList';
import { useDispatch, useSelector } from 'react-redux';
import { changeUser } from '../../modules/auth';

const UserListContainer = () => {
  const dispatch = useDispatch();

  const { userList, user } = useSelector(({ auth }) => ({
    userList: auth.userList,
    user: auth.currentUser,
  }));

  const onChange = (user) => {
    dispatch(
      changeUser(user)
    );
  };

  return <UserList userList={userList} user={user} onChange={onChange}/>;
};

export default UserListContainer;
