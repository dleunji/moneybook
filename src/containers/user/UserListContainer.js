import React, { useCallback, useEffect } from 'react';
import UserList from '../../components/user/UserList';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeUser, createUser, deleteUser, changeField, initializeNewUser, initializeUserList} from '../../modules/auth';
import BASE_URL from '../../api/base';
import { data } from '../../../node_modules/browserslist/index';

const UserListContainer = () => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const { userList, user, newUser } = useSelector(({ auth }) => ({
    userList: auth.userList,
    user: auth.currentUser,
    newUser: auth.newUser
  }));

  const onChange = (user) => {
    dispatch(
      changeUser(user)
    );
  };

  const onDelete = (userId) => {
    if(user != null && userId === user.userId){
      dispatch(changeUser(null));
    }
    dispatch(
      deleteUser(userId)
    );
    setOpen(false);
  };

  const handleAddOpen = () => {
    setOpen(true);
  }

  const handleClose = () => {
    setOpen(false);
  }

  const saveClose = () => {
    console.log(newUser);
    dispatch(createUser(newUser));
    dispatch(initializeNewUser());
    setOpen(false);
  }

  const handleTextField = (e) => {
    const {name, value} = e.target;
    console.log(name,value);
    dispatch(
      changeField({
        name, value
      })
    );
  }

  const fetchUserList = useCallback(() => {
    try {
      fetch("/api/Users")
        .then(res => {
          console.log(res.url);
          console.log(res.status);
          return res.json();
        })
        .then(data => {
          console.log(data);
          dispatch(initializeUserList(data));
        })
    } catch (e) {
      // 실패 처리
      console.log(e);
    }
  })

  useEffect(() => {
    fetchUserList();
  },[])

  return (
    <UserList
      userList={userList}
      user={user}
      onChange={onChange}
      onDelete={onDelete}
      open={open}
      handleAddOpen={handleAddOpen}
      handleClose={handleClose}
      saveClose={saveClose}
      newUser={newUser}
      handleTextField={handleTextField}
    />
  );
};

export default UserListContainer;
