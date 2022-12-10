CREATE DATABASE IF NOT EXISTS companytest;

USE companytest;

CREATE TABLE employee(
	id INTEGER(11) NOT NULL AUTO_INCREMENT,
    name VARCHAR(45) DEFAULT NULL,
    salary INTEGER(20) DEFAULT NULL,
    PRIMARY KEY (id)
);

DESCRIBE employee;

INSERT INTO employee values 
  (1, 'Ryan Ray', 20000),
  (2, 'Joe McMillan', 40000),
  (3, 'John Carter', 50000);

SELECT * FROM employee;