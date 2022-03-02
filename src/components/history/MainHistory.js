import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import DoubleEntryTable from './DoubleEntryTable';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
// TODO: 잔액
// TODO: 복식부기표
// TODO: 일간, 주간, 월간, 지정 탭
// TODO: 단식, 복식 선택은 옵션 탭에 넣기
const ContentBlock = styled.div`
  padding: 3rem 3rem;
  display: flex;
  flex-direction: column;
`;
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          {children}
        </Box>
      )}
    </div>
  );
}
TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const MainHistory = ({history, onChangePeriodTab}) => {
  return (
    <ContentBlock>
      <div className="balance-box">
        <h4>지갑 잔액 30,000</h4>
        <h4>계좌 잔액 20,000</h4>
        <h4>미납 대금 20,000</h4>
      </div>
      <div className="history-style-options">
        <span>단식/복식</span>
      </div>
      <Box sx={{ width: '100%' }}>
        <Box sw={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs value={history.periodTab} onChange={onChangePeriodTab}>
            <Tab label="일간" {...a11yProps(0)} />
            <Tab label="주간" {...a11yProps(1)} />
            <Tab label="월간" {...a11yProps(2)} />
          </Tabs>
        </Box>
        <TabPanel value={history.periodTab} index={0}>
          <DoubleEntryTable />
        </TabPanel>
        <TabPanel value={history.periodTab} index={1}>
          <DoubleEntryTable />
        </TabPanel>
        <TabPanel value={history.periodTab} index={2}>
          <DoubleEntryTable />
        </TabPanel>
      </Box>
    </ContentBlock>
  );
};

export default MainHistory;
