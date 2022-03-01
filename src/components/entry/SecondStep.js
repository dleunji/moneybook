import React from 'react';
import CashIn from './CashIn';
const SecondStep = ({activeOption, onChangeEntry, entry}) => {
  switch(activeOption) {
    case 0:
      return(
        <CashIn
          onChangeEntry={onChangeEntry}
          entry={entry}
        />
      );
    case 1:
      return(
        <div>
          제목
        </div>
      );
    case 2:
      return(
        <div>
          제목
        </div>
      );
    case 3:
      return(
        <div>
          제목
        </div>
      );
    case 4:
      return(
        <div>
          제목
        </div>
      );
    case 5:
      return(
        <div>
          제목
        </div>
      );
  }
}

export default SecondStep;