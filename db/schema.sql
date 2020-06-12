-- Drops forexDB database if it exists
DROP DATABASE IF EXISTS forexDB;
-- Creates the forexDB database
CREATE DATABASE forexDB;
-- 
use forexdb;
--

-- create table currencys (
--     uuid varchar(36),
--     name varchar(16),
--     code varchar(3),
--     country varchar(255),
--     symbolUnicodeHex varchar(32),
--     isBaseCurrency boolean default false
--     Primary Key(uuid)
-- );

-- create unique index idx_currency_code on currencys (code);
