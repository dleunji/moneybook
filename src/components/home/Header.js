import React from 'react';
import styled from 'styled-components';
import Responsive from '../common/Responsive';
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
    font-size: 1.4rem;
    font-family: 'Noto Sans Serif KR';
  }
  .right {
    display: flex;
    color: black;
    text-decoration-line: none;
    font-family: 'Noto Sans Serif KR';
    border: none;
    cursor: pointer;
    align-items: center;
    font-size: 1.4rem;
    a {
      color: inherit;
    }
    .nav-bar {
      font-size: 0.8em;
      display: flex;
      width: 10rem;
      justify-content: space-between;
      margin-right: 2rem;
      .active {
        display: inline;
        cursor: default;
        color: #1976d2;
      }
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
const tabs = ['내역', '기입', '통계'];

const Header = ({ user, onChangeTab, navTab }) => {
  return (
    <>
      <HeaderBlock>
        <Wrapper>
          <div className="left">
            (&nbsp;
            <span className="username">
              {' '}
              {user == null ? '?' : user.userFirstName}{' '}
            </span>
            &nbsp;)의 용돈 기입장
          </div>
          <div className="right">
            <div>
              {user && (
                <div className="nav-bar">
                  {tabs.map((tab, idx) => (
                    <div
                      className={navTab === idx ? 'active' : ''}
                      onClick={() => onChangeTab(idx)}
                      key={idx}
                    >
                      {tab}
                    </div>
                  ))}
                </div>
              )}
            </div>
            <Link to="/users">
              <FontAwesomeIcon icon={faBars} />
            </Link>
          </div>
        </Wrapper>
      </HeaderBlock>
      <Spacer />
    </>
  );
};

export default Header;
