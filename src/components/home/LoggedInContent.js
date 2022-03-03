import React from 'react';
import MainEntry from '../entry/MainEntry';
import MainHistory from '../history/MainHistory';

const LoggedInContent = ({
  navTab,
  handleNext,
  handleBack,
  handleReset,
  activeStep,
  onChangeOption,
  activeOption,
  onChangeEntry,
  entry,
  history,
  onChangePeriodTab,
  onChangeDate,
  onChangePage,
  handleChangeRowsPerPage
}) => {
  switch (navTab) {
    case 0:
      return (
      <MainHistory 
        history={history}
        onChangePeriodTab={onChangePeriodTab}
        onChangeDate={onChangeDate}
        onChangePage={onChangePage}
        handleChangeRowsPerPage={handleChangeRowsPerPage}
      />
      );
    case 1:
      return (
        <MainEntry
          handleNext={handleNext}
          handleBack={handleBack}
          handleReset={handleReset}
          activeStep={activeStep}
          onChangeOption={onChangeOption}
          activeOption={activeOption}
          onChangeEntry={onChangeEntry}
          entry={entry}
        />
      );
    case 2:
      return;
  }
};

export default LoggedInContent;
