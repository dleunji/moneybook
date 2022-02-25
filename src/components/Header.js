import React from 'react';
import styled from 'styled-components';
import Responsive from './common/Responsive';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome/index';
import { faBars } from '@fortawesome/free-solid-svg-icons/index';
import { Link } from 'react-router-dom';

const HeaderBlock = styled.div`
  position: fixed;
  width: 100%;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.08);
`;

const Wrapper = styled(Responsive)`
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .left {
    font-size: 1.125rem;
    font-family: 'Noto Sans Serif KR';
  }
  .right {
    display: flex;
    color: black;
    text-decoration-line: none;
    border: none;
    cursor: pointer;
    align-items: center;
    font-size: 1.4rem;
    span {
      padding-left: 0.3rem;
      font-size: 1rem;
    }
  }
  .username {
    font-family: 'nanum-middle';
    font-size: 2rem;
  }
`;

const Spacer = styled.div`
  height: 4rem;
`;
const Header = ({user}) => {
  return (
    <>
      <HeaderBlock>
        <Wrapper>
          <div className="left">
            (&nbsp;<span className="username"> {user == null ? '?' : user.userFirstName} </span>&nbsp;)의 용돈 기입장
          </div>
          <Link to="/users" className="right">
            <FontAwesomeIcon icon={faBars} />
          </Link>
        </Wrapper>
      </HeaderBlock>
      <Spacer />
    </>
  );
};

export default Header;
