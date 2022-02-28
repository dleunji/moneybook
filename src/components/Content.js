import React from 'react';
import Responsive from './common/Responsive';
import styled from 'styled-components';
import { Box, Stepper, Step, StepLabel, Typography, Button } from '@mui/material/index';
import CashInput from './entry/CashIn';

const steps = ['유형 선택', '내용 입력', '기입 완료'];

const ContentBlock = styled(Responsive)`
  padding-top: 2rem;
  padding-bottom: 2rem;
  display: flex;
  justify-content: center;
`;
const Content = ({ handleNext, handleBack, handleReset, activeStep}) => {
  return (
    <ContentBlock>
      <Box sx={{ width: '90%' }}>
        <Stepper alternativeLabel activeStep={activeStep}>
          {steps.map((label, idx) => {
            return (
              <Step key={idx}>
                <StepLabel>{label}</StepLabel>
              </Step>
            );
          })}
        </Stepper>
        {activeStep === steps.length ? (
          <>
            <Typography sx={{mt: 2, mb: 1}}>
              All steps completed - you&apos;re finished
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'row', pt:2 }}>
              <Box sx={{flex: '1 1 auto'}} />
              <Button onClick={handleReset}>Reset</Button>
            </Box>
          </>
        ): (
          <>
            <Typography sx={{mt: 2, mb: 1}}>
              Step {activeStep + 1}
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2, justifyContent: 'center' }}>
              <Button
                color="inherit"
                disabled={activeStep == 0}
                onClick={handleBack}
                sx={{mr: 1}}
              >
                Back
              </Button>
              <Button onClick={handleNext}>
                {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
              </Button>
            </Box>
          </>
        )}
      </Box>
    </ContentBlock>
  );
};

export default Content;
