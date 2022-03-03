import { useSelector, useDispatch } from 'react-redux';
import LoggedInContent from '../../components/home/LoggedInContent';
import LoggedOutContent from '../../components/home/LoggedOutContent';
import { changeOption, changeStep, changeEntry } from '../../modules/entry';
import { changePeriodTab, changeDate, changePage, changeRowsPerPage } from '../../modules/history';

const ContentContainer = () => {
  const { user, navTab, activeEntryStep, activeEntryOption, entry, history } =
    useSelector(({ auth, home, entry, history }) => ({
      user: auth.currentUser,
      navTab: home.activeNavTab,
      activeEntryStep: entry.activeStep,
      activeEntryOption: entry.activeOption,
      entry: entry.entry,
      history: history
    }));

  const dispatch = useDispatch();

  const onChangeEntryOption = (value) => {
    dispatch(changeOption(value));
  };

  const handleNext = () => {
    dispatch(changeStep(activeEntryStep + 1));
  };

  const handleBack = () => {
    dispatch(changeStep(activeEntryStep - 1));
  };

  const handleReset = () => {
    dispatch(changeStep(0));
  };

  const onChangeEntry = (name, value) => {
    dispatch(changeEntry({ name, value }));
  };

  // history
  const onChangePeriodTab = (e, periodTab) => {
    console.log(periodTab);
    dispatch(changePeriodTab(periodTab));
  };

  const onChangeDate = (name, value) => {
    dispatch(changeDate({name, value}));
  };

  const onChangePage = (page) => {
    dispatch(changePage(page));
  };

  const handleChangeRowsPerPage = (event) => {
    console.log(event.target);
    dispatch(changeRowsPerPage(parseInt(event.target.value, 10)));
    dispatch(changePage(0));
  }

  return (
    <div>
      {user === null ? (
        <LoggedOutContent />
      ) : (
        <LoggedInContent
          navTab={navTab}
          handleReset={handleReset}
          handleNext={handleNext}
          handleBack={handleBack}
          activeStep={activeEntryStep}
          onChangeOption={onChangeEntryOption}
          activeOption={activeEntryOption}
          onChangeEntry={onChangeEntry}
          entry={entry}
          history={history}
          onChangePeriodTab={onChangePeriodTab}
          onChangeDate={onChangeDate}
          onChangePage={onChangePage}
          handleChangeRowsPerPage={handleChangeRowsPerPage}
        />
      )}
    </div>
  );
};

export default ContentContainer;
