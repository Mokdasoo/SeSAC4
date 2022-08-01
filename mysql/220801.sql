CREATE DATABASE sesac;

USE sesac;

CREATE TABLE user (
	ID varchar(10) not null primary key,
    name varchar(5) not null default '',
    birthday date not null
);


DESC user;

insert into user (id, name, birthday) values ('id1', '홍길동', '2022-08-01');

select * from user;

insert into user values ('id2', '길동이', '2022-08-01');
insert into user values ('id3', '홍동길', '2022-08-01');
insert into user values ('id0', '동길홍', '2022-08-01');

select * from user where name = '홍길동';
select * from user where birthday = '2022-08-01' order by id desc;
select * from user order by id desc limit 2;
select * from user limit 2;
select name, birthday from user;

/* BETWEEN a AND b */
SELECT * FROM player WHERE height BETWEEN 160 AND 180;
/* IN */
SELECT * FROM player WHERE postion IN('striker', 'goalkeeper');
/* LIKE  _  % */
SELECT * FROM user WHERE name LIKE '홍%';

UPDATE user SET name='홍길동' WHERE ID = '길동홍';
UPDATE user SET name='홍길동2', birthday='2022-07-31' WHERE ID != 'id2';

DELETE FROM user WHERE name = '길동이';

drop table user;

create table user(
	id varchar(10) not null primary key,
    pw varchar(20) not null,
    name varchar(5) not null,
    gender enum('F', 'M', '') default '',
    birthday date not null,
    age int(3) not null default 0
);



insert into user values('hong1234', '8o4bkg', '홍길동', 'M', '1990-01-31', 33);
insert into user values('sexysung', '87awjkdf', '성춘향', 'F', '1992-03-31', 31);
insert into user values('power70', 'qxur8sda', '변사또', 'M', '1970-05-02', 53);
insert into user values('hanjo', 'jk48fn4', '한조', 'M', '1984-10-18', 39);
insert into user values('widowmaker', '38ewifh3', '위도우', 'F', '1976-06-27', 47);
insert into user values('dvadva', 'k3f3ah', '송하나', 'F', '2001-06-03', 22);
insert into user values('jungkrat', '4ifha7f', '정크랫', 'M', '1999-11-11', 24);




/*1.*/
SELECT * FROM user ORDER BY birthday ASC;
/*2.*/
SELECT * FROM user WHERE gender = 'M' ORDER BY name DESC;
/*3.*/
SELECT id, name FROM user WHERE birthday LIKE '199%';
/*4.*/
SELECT * FROM user WHERE birthday LIKE '%-06-%';
/*5.*/
SELECT * FROM user WHERE gender = 'M' AND birthday LIKE '197%';
/*6.*/
SELECT * FROM user ORDER BY age DESC LIMIT 3;
/*7.*/
SELECT * FROM user WHERE age BETWEEN 25 AND 50;
/*8.*/
UPDATE user SET pw = '12345678' WHERE id = 'hong1234';
/*9.*/
DELETE FROM user WHERE id = 'jungkrat';



