import React from 'react';
import { LocalizationProvider, DatePicker } from '@mui/lab/index';
import { TextField, InputAdornment } from '@mui/material/index';
import AdapterDateFns from '@mui/lab/AdapterDateFns';

const CashIn = ({onChangeEntry, entry}) => {
  return (
    <div className="cash-in">
      <h3>날짜</h3>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DatePicker
          value={entry.date}
          onChange={(newDate) => {
            onChangeEntry('date', newDate);
          }}
          renderInput={(params) => <TextField {...params}/>}
        />
      </LocalizationProvider>
      <h3>금액</h3>
      <TextField sx={{ width: '14.4rem' }} InputProps={{
          startAdornment: <InputAdornment position="start">₩</InputAdornment>,
        }}
        value={entry.amount}
        onChange={(e) => {
          console.log(e.target);
          onChangeEntry('amount', e.target.value);
        }}
      />
      <h3>비고</h3>
      <TextField 
        sx={{ width: '25rem' }}
        placeholder="20자 이내로 작성"
        value={entry.note}
        onChange={(e) => {
          onChangeEntry('note', e.target.value);
        }}
      />
    </div>
  );
};

export default CashIn;
