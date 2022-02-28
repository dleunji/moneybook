import React from 'react';
import Header from '../../components/Header';
import Content from '../../components/Content';
import { useSelector, useDispatch } from 'react-redux';
import { changeTab, changeStep } from '../../modules/home';

const HomeContainer = () => {
  const { user, navTab, activeStep } = useSelector(({ auth, home }) => ({
    user: auth.currentUser,
    navTab: home.navItem,
    activeStep: home.activeStep
  }));

  const dispatch = useDispatch();

  const onChangeTab = (navItem) => {
    dispatch(changeTab(navItem));
  };

  const handleNext = () => {
    dispatch(changeStep(activeStep + 1));
  }

  const handleBack = () => {
    dispatch(changeStep(activeStep - 1));
  }

  const handleReset = () => {
    dispatch(changeStep(0));
  }

  return (
    <div>
      <Header user={user} onChangeTab={onChangeTab} navTab={navTab} />
      <Content
        handleReset={handleReset}
        handleNext={handleNext}
        handleBack={handleBack}
        activeStep={activeStep}
      />
    </div>
  );
};
export default HomeContainer;
