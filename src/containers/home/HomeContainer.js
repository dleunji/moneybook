import React from 'react';
import Header from '../../components/home/Header';
import Content from '../../components/home/Content';
import { useSelector, useDispatch } from 'react-redux';
import { changeTab, changeEntryStep, changeEntryOption, changeEntryDate } from '../../modules/home';

const HomeContainer = () => {
  const { user, navTab, activeEntryStep, activeEntryOption, entry } = useSelector(({ auth, home }) => ({
    user: auth.currentUser,
    navTab: home.navItem,
    activeEntryStep: home.activeEntryStep,
    activeEntryOption: home.activeEntryOption,
    entry: home.entry
  }));

  const dispatch = useDispatch();

  const onChangeTab = (navItem) => {
    dispatch(changeTab(navItem));
  };
  
  const onChangeEntryOption = (value) => {
    dispatch(changeEntryOption(value));
  }

  const handleNext = () => {
    dispatch(changeEntryStep(activeEntryStep + 1));
  }

  const handleBack = () => {
    dispatch(changeEntryStep(activeEntryStep - 1));
  }

  const handleReset = () => {
    dispatch(changeEntryStep(0));
  }

  const onChangeEntry = (name, value) => {
    console.log(value);
    dispatch(changeEntryDate({name, value}));
  }

  return (
    <div>
      <Header user={user} onChangeTab={onChangeTab} navTab={navTab} />
      <Content
        handleReset={handleReset}
        handleNext={handleNext}
        handleBack={handleBack}
        activeStep={activeEntryStep}
        onChangeOption={onChangeEntryOption}
        activeOption={activeEntryOption}
        onChangeEntry={onChangeEntry}
        entry={entry}
      />
    </div>
  );
};
export default HomeContainer;
