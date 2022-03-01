import React from 'react';
import { Checkbox, FormControlLabel } from '@mui/material/index';
import SecondStep from './SecondStep';

const options =[
  '현금 수입',
  '현금 지출',
  '계좌 입금',
  '계좌 출금',
  '신용카드 사용',
  '신용카드 대금 결제'
];

const CustomStepper = ({activeStep, activeOption, onChangeOption, onChangeEntry, entry}) => {
  switch(activeStep) {
    case 0:
      return (
        <div className="step-options">
          {options.map((option, idx) =>
            <FormControlLabel
              key={idx}
              control={<Checkbox checked={activeOption === idx}/>} 
              label={option}
              onClick={() => onChangeOption(idx)}
            />
          )}
        </div>
      );
    case 1:
      return (
        <SecondStep
          activeOption={activeOption}
          onChangeEntry={onChangeEntry}
          entry={entry}
        />);
    case 2:
      return <div>스텝3</div>;
  }
}

export default CustomStepper;