import React from 'react';
import styled from 'styled-components';
import TableContainer from '@mui/material/TableContainer';
import { TableBody, TableCell, TableHead, TableRow, Table, Paper } from '@mui/material/index';
import { faArrowUp, faArrowDown} from '@fortawesome/free-solid-svg-icons/index';
import { FontAwesomeIcon } from '../../../node_modules/@fortawesome/react-fontawesome/index';

const TableBlock = styled.div`
  width: 100%;
  height: 40rem;
  border-radius: 9px;
  table {
    border-collapse: collapse;
    thead {
      background-color: #f3f6f9;
    }
    .plus {
      margin-left: 0.5rem;
      color: red;
    }
    .minus {
      margin-left: 0.5rem;
      color: blue;
    }
  }
`;

const upperColumns = ['일자', '카테고리', '항목', '차변', '우변', '메모'];
const list = [
  // 계좌 입금
  {
    date: '2022-03-02',
    category:'용돈',
    content: '저금통 깼음',
    debtAccount: '자산(예금)',
    debtSign: 1,
    amount: 3000,
    creditAccount: '자산(현금)',
    creditSign: -1,
    memo: '설거지 값'
  },
  // 계좌 인출
  {
    date: '2022-03-02',
    category: '기타',
    content: '현금화',
    debtAccount: '자산(예금)',
    debtSign: -1,
    amount: 10000,
    creditAccount: '자산(현금)',
    creditSign: 1
  },
  // 현금성 수입
  {
    date: '2022-03-02',
    category: '용돈',
    content: '2월 용돈',
    debtAccount: '자산(현금)',
    debtSign: 1,
    amount: 3000,
    creditAccount: '수익',
    creditSign: 0
  },
  // 예금성 수입
  {
    date: '2022-03-02',
    category: '용돈',
    content: '1월 이자',
    debtAccount: '자산(예금)',
    debtSign: 1,
    amount: 3000,
    creditAccount: '수익',
    creditSign: 0
  },
  // 현금성 지출
  {
    date: '2022-03-02',
    category: '식비',
    content: '순이네 마트',
    debtAccount: '비용',
    debtSign:0,
    amount: 1500,
    creditAccount: '자산(현금)',
    creditSign: -1,
    memo: '과자'
  },
  // 예금성 지출
  {
    date: '2022-03-02',
    category: '용돈',
    content: '순이네 마트',
    debtAccount: '비용',
    debtSign:0,
    amount: 4500,
    creditAccount: '자산(예금)',
    creditSign: -1,
    memo: '고무장갑'
  },
  // 신용카드 사용
  {
    date: '2022-03-02',
    category: '전자기기',
    content: '하이마트',
    debtAccount: '비용',
    debtSign: 0,
    amount: 50000,
    creditAccount: '부채',
    creditSign: 1,
    memo: '이어폰'
  },
  // 신용카드 대금 납부
  {
    date: '2022-03-02',
    category: '대금 납부',
    content: '우리카드결제',
    debtAccount: '부채',
    debtSign: -1,
    amount: 50000,
    creditAccount: '자산(예금)',
    creditSign: -1,
    memo: '이어폰'
  }
];
const DoubleEntryTable = () => {
  return (
    <TableBlock>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              {upperColumns.map((column, idx) => (
                <TableCell
                  align="center"
                  key={idx}
                  colSpan={idx === 3 || idx === 4 ? 2 : 1}
                >
                  {column}
                </TableCell>
              ))}
            </TableRow>
            <TableRow>
              <TableCell align="center" colSpan={3}></TableCell>
              <TableCell align="center">계정</TableCell>
              <TableCell align="center">금액</TableCell>
              <TableCell align="center">계정</TableCell>
              <TableCell align="center">금액</TableCell>
              <TableCell align="center"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {list.map((h, idx) => (
              <TableRow key={idx} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                <TableCell>{h.date}</TableCell>
                <TableCell>{h.category}</TableCell>
                <TableCell>{h.content}</TableCell>
                <TableCell>
                  {h.debtAccount}
                  {h.debtSign == -1 ? <FontAwesomeIcon className="minus" icon={faArrowDown}/> : h.debtSign == 1 ? <FontAwesomeIcon className="plus" icon={faArrowUp}/> : ''}
                </TableCell>
                <TableCell>{h.amount}</TableCell>
                <TableCell>
                  {h.creditAccount}
                  {h.creditSign == -1 ? <FontAwesomeIcon className="minus" icon={faArrowDown}/> : h.creditSign == 1 ? <FontAwesomeIcon className="plus" icon={faArrowUp}/> : ''}
                </TableCell>
                <TableCell>{h.amount}</TableCell>
                <TableCell>{h.memo}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </TableBlock>
  );
};

export default DoubleEntryTable;
