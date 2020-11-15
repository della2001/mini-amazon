# Basic outline

- Louis - 
This is the backend server for mini-amazon.
I'm using mysql for db and flask for web app.
So you should have mysql installed on your machine to run this app.
Other than that, I'm using sqlalchemy as a connector(client) between mysql and flask.
All the dependencies are in the requirements.txt so please take a look

# Update(add below for all the team)

2020/10/07 - I've(Louis) created backbone of the backend so feel free to jump into whichever part you want to implement

# Checklist

[X] user
[X] item

<!-- add more as neccessary -->

# How to start the server

1. check if mysql is runnig locally

if not run these commands

```
$ brew install mysql
$ brew install mysql-client
$ brew cask install mysqlworkbench
```

Then

```
$ brew services start mysql
```

to start the server

2. Now use the mysql-client to get the port for your mysql server

```
$ mysql -uroot
```

# How to start the virtualenv

1. make virtualenv 

```
python3 -m venv <name-of-env>
```

2. run the virtualenv

```
source <name-of-env>/bin/activate
```
