import React from 'react';
import UserList from '../../components/user/UserList';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeUser, createUser, deleteUser, changeField, initialNewUser} from '../../modules/auth';

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
    dispatch(initialNewUser());
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
