/*

Enter custom T-SQL here that would run after SQL Server has started up. 

*/

CREATE DATABASE ToDoDatabase;
GO

USE ToDoDatabase;

CREATE TABLE [task_status_reference] (
    [ID] INT IDENTITY(1,1) PRIMARY KEY,
    [value] VARCHAR(32) NOT NULL
);
GO

INSERT INTO [task_status_reference] ([value])
VALUES
('Created'),
('Not started'),
('In progress'),
('Cancelled'),
('Completed');
GO

CREATE TABLE [tasks] (
    [task_reference] INT IDENTITY(1,1) PRIMARY KEY,
    [task_name] NVARCHAR(MAX),
    [task_status] INT FOREIGN KEY REFERENCES task_status_reference([ID]),
    [date_created] DATETIME2,
    [date_modified] DATETIME2,
    [date_completed] DATETIME2
);
GO

INSERT INTO [tasks] ([task_name], [task_status], [date_created], [date_modified], [date_completed])
VALUES ('Create a to-do list app', 3, '2023-07-06 15:58:28.0000000', '2023-07-06 15:58:28.0000000', NULL);
GO


-- Add additional tables and data below --

