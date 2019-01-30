create table users(
  id serial,
  username varchar(160),
  password varchar(160)
)

insert into users(id, username, password)
values (1, 'Harry', 'Stupify')
