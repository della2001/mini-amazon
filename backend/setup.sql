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

-- curl --header "Content-Type: application/json" \
--   --request POST \
--   --data '{"name": "foo", "username":"xyz","password":"xyz", "is_buyer": False}' \
--   http://localhost:5000/registration/



--   curl --header "Content-Type: application/json" \
--   --request POST \
--   --data  '{"name": "foo", "username": "foofoo", "password": "123", "is_buyer": "false", "address": "abc", "is_seller": "true"}'  \
--   http://localhost:5000/registration/