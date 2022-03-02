import React from 'react';
import Responsive from '../common/Responsive';
import styled from 'styled-components';
import {
  Box,
  Stepper,
  Step,
  StepLabel,
  Typography,
  Button,
} from '@mui/material/index';
import CustomStepper from '../entry/CustomStepper';
const steps = ['유형 선택', '내용 입력'];

const ContentBlock = styled(Responsive)`
  padding-top: 2rem;
  padding-bottom: 2rem;
  display: flex;
  justify-content: center;
  .content-stepper {
    margin-bottom: 3rem;
  }
  .content-box {
    margin-top: 3rem;
    .content-stepper {
      height: 20rem;
    }
    .step-options {
      display: flex;
      flex-direction: column;
    }
    .cash-in {
      align-items: center;
    }
  }
`;

const MainEntry = ({
  handleNext,
  handleBack,
  handleReset,
  activeStep,
  onChangeOption,
  activeOption,
  onChangeEntry,
  entry,
}) => {
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
          <div className="content-box">
            <Typography sx={{ mt: 2, mb: 1 }}>
              All steps completed - you&apos;re finished
            </Typography>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'row',
                pt: 2,
                justifyContent: 'center',
              }}
            >
              <Box sx={{ flex: '1 1 auto' }} />
              <Button onClick={handleReset}>홈으로</Button>
            </Box>
          </div>
        ) : (
          <div className="content-box">
            <div className="content-stepper">
              <CustomStepper
                activeStep={activeStep}
                activeOption={activeOption}
                onChangeOption={onChangeOption}
                onChangeEntry={onChangeEntry}
                entry={entry}
              />
            </div>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'row',
                pt: 2,
                justifyContent: 'center',
              }}
            >
              <Button
                color="inherit"
                disabled={activeStep === 0}
                onClick={handleBack}
                sx={{ mr: 1 }}
              >
                뒤로
              </Button>
              <Button onClick={handleNext}>
                {activeStep === steps.length - 1 ? '등록' : '다음'}
              </Button>
            </Box>
          </div>
        )}
      </Box>
    </ContentBlock>
  );
};

export default MainEntry;
