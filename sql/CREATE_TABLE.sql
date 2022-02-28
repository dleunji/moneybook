USE [DB_MONEYBOOK]
GO

CREATE TABLE [dbo].[User] (
	user_id int IDENTITY (1,1) PRIMARY KEY,
	user_first_name NVARCHAR(5) NOT NULL,
	user_last_name NVARCHAR(5) NOT NULL,
	cash_amount INT NOT NULL DEFAULT 0
);
GO

CREATE TABLE [dbo].[Category] (
	category_id INT PRIMARY KEY,
	category_name VARCHAR(20) NOT NULL
);
GO

CREATE TABLE [dbo].[Account] (
	account_id INT PRIMARY KEY,
	user_id INT,
	amount INT DEFAULT 0,
	CONSTRAINT FK_User FOREIGN KEY (user_id) REFERENCES [dbo].[User](user_id)
);

CREATE TABLE [dbo].[Deposit](
	deposit_id INT PRIMARY KEY,
	category_id INT,
	created_at 
	timestamp
);




