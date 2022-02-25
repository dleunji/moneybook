import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome/index';
import {
  faCheck,
  faPenToSquare,
  faTrashCan,
} from '@fortawesome/free-solid-svg-icons/index';
const Item = styled.div`
  height: 4rem;
  display: flex;
  justify-content: space-between;
  font-size: 1.4rem;
  align-items: center;
  padding: 0 1rem;
  & + & {
    border-top: 1px solid black;
  }
  .username {
    font-family: 'nanum-middle';
    font-size: 3rem;
  }
  .icon {
    width: 3rem;
    font-size: 
    padding-left: 0.8rem;
  }
`;

const UserItem = ({ user, checked, onChange }) => {
  return (
    <Item>
      <span className="username">
        {user.userLastName}
        {user.userFirstName}
      </span>
      <div className="options">
        {checked ? null : <FontAwesomeIcon className="icon" icon={faCheck} onClick={() => onChange(user)}/>}
        <FontAwesomeIcon className="icon" icon={faPenToSquare} />
        <FontAwesomeIcon className="icon" icon={faTrashCan} />
      </div>
    </Item>
  );
};

export default UserItem;
