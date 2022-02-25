import React from 'react';
import styled from 'styled-components';
import Responsive from '../common/Responsive';
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
`;

const UserList = ({ userList, user, onChange }) => {
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
        <UserItemList users={userList} user={user} onChange={onChange}/>
      </BodyBlock>
      <FooterBlock>완료</FooterBlock>
    </div>
  );
};

export default UserList;
