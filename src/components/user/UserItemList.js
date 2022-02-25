import React from 'react';
import UserItem from './UserItem';
import styled from 'styled-components';
const List = styled.div`
  background-image: linear-gradient(
      rgba(255, 255, 255, 0.8),
      rgba(255, 255, 255, 0.8)
    ),
    url('/images/SkyCloud01_generated.jpg');
  background-size: cover;
  width: 50rem;
  min-height: 40rem;
  border: 2px solid black;
  overflow-y: auto;
`;

const UserItemList = ({ users, user, onChange }) => {
  return (
    <List>
      {users.map((u) => (
        <UserItem user={u} key={u.userId} checked={user != null && u.userId == user.userId} onChange={onChange}/>
      ))}
    </List>
  );
};

export default UserItemList;
