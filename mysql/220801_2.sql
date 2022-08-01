create table member(
	id varchar(20) not null primary key,
    name varchar(5) not null,
    age int(2),
    gender varchar(2) not null,
    email varchar(50),
    promotion varchar(2) default 'x'

);


alter table member modify id varchar(10);
alter table member drop age;
alter table member modify gender  varchar(2) not null default '여';
alter table member add interest varchar(100);





