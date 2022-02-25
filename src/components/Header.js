import React from 'react';
import styled from 'styled-components';
import Responsive from './common/Responsive';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome/index';
import { faUserGroup } from '@fortawesome/free-solid-svg-icons/index';
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
    letter-spacing: 2px;
  }
  .right {
    display: flex;
    color: gray;
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
const Header = () => {
  return (
    <>
      <HeaderBlock>
        <Wrapper>
          <div className="left">
            (&nbsp;<span className="username">? </span>&nbsp;)의 용돈 기입장
          </div>
          <Link to="/users" className="right">
            <FontAwesomeIcon icon={faUserGroup} />
            <span>Accounts</span>
          </Link>
        </Wrapper>
      </HeaderBlock>
      <Spacer />
    </>
  );
};

export default Header;
