<<<<<<< HEAD
CREATE TABLE user(
    id int NOT NULL AUTO_INCREMENT,
    name varchar(50) NOT NULL,
    username varchar(50) NOT NULL,
    password varchar(50) NOT NULL, 
    PRIMARY KEY(id)
)
=======
-- CREATE TABLE user
-- (
--     id int not null
--     auto_increment,
--     name VARCHAR
--     (50),
--     username VARCHAR
--     (50),
--     password VARCHAR
--     (50), 
--  PRIMARY KEY
--     (id)
-- )
>>>>>>> della

-- curl --header "Content-Type: application/json" \
--   --request POST \
--   --data '{"name": "foo", "username":"xyz","password":"xyz", "is_buyer": False}' \
--   http://localhost:5000/registration/



<<<<<<< HEAD
  curl --header "Content-Type: application/json" \
  --request POST \
  --data  '{"name": "foo", "username": "xyz", "password": "xyz", "is_buyer": "false", "address": "abc", "is_seller": "true"}'  \
  http://localhost:5000/registration/
=======
--   curl --header "Content-Type: application/json" \
--   --request POST \
--   --data  '{"name": "foo", "username": "foofoo", "password": "123", "is_buyer": "false", "address": "abc", "is_seller": "true"}'  \
--   http://localhost:5000/registration/
>>>>>>> della