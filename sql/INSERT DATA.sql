USE [DB_MONEYBOOK]
GO
-- User
INSERT INTO [dbo].[User] VALUES ('은지', '이', 0);
INSERT INTO [dbo].[User] VALUES ('길동', '홍', 0);
INSERT INTO [dbo].[User] VALUES ('사람', '눈', 0);

-- Category
INSERT INTO [dbo].[Category] VALUES(1, '식비');
INSERT INTO [dbo].[Category] VALUES(2, '카페, 간식');
INSERT INTO [dbo].[Category] VALUES(3, '편의점, 마트, 잡화');
INSERT INTO [dbo].[Category] VALUES(4, '술, 유흥');
INSERT INTO [dbo].[Category] VALUES(5, '쇼핑');
INSERT INTO [dbo].[Category] VALUES(6, '취미, 여가');
INSERT INTO [dbo].[Category] VALUES(7, '의료, 건강, 피트니스');
INSERT INTO [dbo].[Category] VALUES(8, '주거, 통신');
INSERT INTO [dbo].[Category] VALUES(9, '보험, 세금, 기타 금융');
INSERT INTO [dbo].[Category] VALUES(10, '미용');
INSERT INTO [dbo].[Category] VALUES(11, '교통, 자동차');
INSERT INTO [dbo].[Category] VALUES(12, '여행, 숙박');
INSERT INTO [dbo].[Category] VALUES(13, '교육');
INSERT INTO [dbo].[Category] VALUES(14, '생활');
INSERT INTO [dbo].[Category] VALUES(15, '기부, 후원');
INSERT INTO [dbo].[Category] VALUES(16, '기타');
INSERT INTO [dbo].[Category] VALUES(17, 'ATM 출금');
INSERT INTO [dbo].[Category] VALUES(18, '이체');
INSERT INTO [dbo].[Category] VALUES(19, '급여');
INSERT INTO [dbo].[Category] VALUES(20, '카드대금');
INSERT INTO [dbo].[Category] VALUES(21, '저축, 투자');

SELECT * FROM [dbo].[User];
SELECT * FROM [dbo].[Category];