# mini-amazon

## 11/5 Update (Della):

### Things I did that are working:
* implemented a registration page, you can fill in a form and it will add a user to the database
* created queries for creating new tables (buyer, seller, user, product, cart)
* fixed SQL user table columns (previously the id wasn't auto incrementing, there were no checks for NULL, etc)
* created basic skeleton for homepage, shows all products, shows product description when clicked on
* implemented price sorting and category sorting for products in homepage

### Things I started working on but haven't finished:
* is_buyer and is_seller is correct in JSON string but doesn't change values in the user table
* user goes into the user table but does not add itself to buyer/seller table accordingly
* product table is still missing many columns
* product search bar and add to cart functionality in homepage aren't working yet

### What we still need to do:
* create new tables in SQL according to our ER diagram
* add missing columns to current tables
* add products into the product table
* implement user actions (login, forgot password, etc)
* implement buyer actions (add to cart, count items, delete from cart, etc)
* implement seller actions (add new product, etc)
* implement frontend functionalities (search bar, etc)
* account for edge cases (both buyer and seller, buyer trying to sell, buyer buying an out of stock product)

### IMPORTANT: since we allegedly have 6 members we also need an extra functionality. which we decided was Warehouse/Storage/Shipping.  


### How to run the files:
Using separate terminal windows:

1. Start mysql server (refer to the README In /backend if you dont have mysql installed)
        brew services start mysql
    Then to open mysql
        mysql -uroot

2. Start Flask server (in /backend folder):
        python run.py

3. Run React (in /frontend folder):
        yarn start
 





