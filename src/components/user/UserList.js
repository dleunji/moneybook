import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import UserItemList from './UserItemList';

const HeaderBlock = styled.div`
  width: 100%;
  height: 7rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 3rem;

  .title {
    font-size: 2.5rem;
    font-family: 'Noto Sans Serif KR';
    .username {
      font-family: 'nanum-middle';
      font-size: 3.4rem;
    }
  }
`;

const BodyBlock = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 2rem;
`;

const FooterBlock = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1rem;
`;

const FinishButton = styled.button`
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  font-family: 'Noto Sans Serif KR';
  padding: 0.8rem 1rem;
  outline: none;
  cursor: pointer;
  color: white;
  background: black;
  margin: 0 0.2rem;
`;

const UserList = ({ userList, user, onChange, onDelete, open, handleAddOpen, handleClose, saveClose, newUser, handleTextField }) => {
  return (
    <div>
      <HeaderBlock>
        <div className="title">
          (
          <span className="username">
            &nbsp;
            {user == null ? '?' : user.userFirstName}
            &nbsp;
          </span>
          )의 용돈 기입장
        </div>
      </HeaderBlock>
      <BodyBlock>
        <UserItemList
          users={userList}
          user={user}
          onChange={onChange}
          onDelete={onDelete}
          open={open}
          handleClose={handleClose}
          handleAddOpen={handleAddOpen}
          saveClose={saveClose}
          newUser={newUser}
          handleTextField={handleTextField}
        />
      </BodyBlock>
      <FooterBlock>
        <Link to="/">
          <FinishButton>완료</FinishButton>
        </Link>
      </FooterBlock>
    </div>
  );
};

export default UserList;
