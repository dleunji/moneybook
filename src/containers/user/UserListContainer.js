import React from 'react';
import UserList from '../../components/user/UserList';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeUser, deleteUser } from '../../modules/auth';

const UserListContainer = () => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const { userList, user } = useSelector(({ auth }) => ({
    userList: auth.userList,
    user: auth.currentUser,
  }));

  const onChange = (user) => {
    dispatch(
      changeUser(user)
    );
  };

  const onDelete = (userId) => {
    if(user != null && userId == user.userId){
      dispatch(changeUser(null));
    }
    dispatch(
      deleteUser(userId)
    );
    setOpen(false);
  };

  const handleDeleteOpen = () => {
    setOpen(true);
  }

  const handleClose = () => {
    setOpen(false);
  }

  return (
    <UserList
      userList={userList}
      user={user}
      onChange={onChange}
      onDelete={onDelete}
      open={open}
      handleDeleteOpen={handleDeleteOpen}
      handleClose={handleClose}
    />
  );
};

export default UserListContainer;
