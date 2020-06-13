-- Drops forexDB database if it exists
DROP DATABASE IF EXISTS forexDB;
-- Creates the forexDB database
CREATE DATABASE forexDB;
-- 
use forexdb;
--

create table currencys (
    uuid varchar(36),
    name varchar(16),
    code varchar(3),
    country varchar(255),
    symbolUnicodeHex varchar(32),
    isBaseCurrency boolean default false,
    Primary Key(uuid)
);


create table exchangerates (
    uuid varchar(36),
    baseCurrencyCode varchar(3),
    targetCurrencyCode varchar(5),
    rate DECIMAL(10,8)
);

CREATE TABLE accounts (
    uuid varchar(36),
    firstName varchar(25),
    lastName varchar(25),
    email varchar(30),
    password varchar(15),
    baseCurrencyCode varchar(3),
    initialAmount DECIMAL(10,8)
);
insert into accounts (uuid,firstName,lastName,email,password,baseCurrencyCode,initialAmount)
values

-- create unique index idx_currency_code on currencys (code);
