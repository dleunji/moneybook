import React from 'react';
import Header from '../../components/home/Header';
import { changeTab } from '../../modules/home';
import { useSelector, useDispatch } from 'react-redux';

const HomeContainer = () => {
  const { user, navTab } = useSelector(({ auth, home }) => ({
    user: auth.currentUser,
    navTab: home.activeNavTab,
  }));

  const dispatch = useDispatch();

  const onChangeTab = (navTab) => {
    dispatch(changeTab(navTab));
  };

  return (
    <div>
      <Header user={user} onChangeTab={onChangeTab} navTab={navTab} />
    </div>
  );
};
export default HomeContainer;
