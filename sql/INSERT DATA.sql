USE [DB_MONEYBOOK]
GO
-- User
INSERT INTO [dbo].[User] VALUES ('����', '��', 0);
INSERT INTO [dbo].[User] VALUES ('�浿', 'ȫ', 0);
INSERT INTO [dbo].[User] VALUES ('���', '��', 0);

-- Category
INSERT INTO [dbo].[Category] VALUES(1, '�ĺ�');
INSERT INTO [dbo].[Category] VALUES(2, 'ī��, ����');
INSERT INTO [dbo].[Category] VALUES(3, '������, ��Ʈ, ��ȭ');
INSERT INTO [dbo].[Category] VALUES(4, '��, ����');
INSERT INTO [dbo].[Category] VALUES(5, '����');
INSERT INTO [dbo].[Category] VALUES(6, '���, ����');
INSERT INTO [dbo].[Category] VALUES(7, '�Ƿ�, �ǰ�, ��Ʈ�Ͻ�');
INSERT INTO [dbo].[Category] VALUES(8, '�ְ�, ���');
INSERT INTO [dbo].[Category] VALUES(9, '����, ����, ��Ÿ ����');
INSERT INTO [dbo].[Category] VALUES(10, '�̿�');
INSERT INTO [dbo].[Category] VALUES(11, '����, �ڵ���');
INSERT INTO [dbo].[Category] VALUES(12, '����, ����');
INSERT INTO [dbo].[Category] VALUES(13, '����');
INSERT INTO [dbo].[Category] VALUES(14, '��Ȱ');
INSERT INTO [dbo].[Category] VALUES(15, '���, �Ŀ�');
INSERT INTO [dbo].[Category] VALUES(16, '��Ÿ');
INSERT INTO [dbo].[Category] VALUES(17, 'ATM ���');
INSERT INTO [dbo].[Category] VALUES(18, '��ü');
INSERT INTO [dbo].[Category] VALUES(19, '�޿�');
INSERT INTO [dbo].[Category] VALUES(20, 'ī����');
INSERT INTO [dbo].[Category] VALUES(21, '����, ����');

SELECT * FROM [dbo].[User];
SELECT * FROM [dbo].[Category];