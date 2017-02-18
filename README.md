# README #

This is the server side code for tmobile-server.

### What is this repository for? ###

* Quick summary
* Version
* [Learn Markdown](https://bitbucket.org/tutorials/markdowndemo)

### How do I get set up? ###

* Summary of set up

* Configuration

    node and npm is a must on your machine, so install it
    Once you get or clone the code go to the tmobile-server directory and then do $npm install
    This command should get all the packages neccesary to run. Might take 3/4 minutes!

* Dependencies
* Database configuration
    make sure you install mysql 5.6
    create a user ep/ep if you do not have Elastic Path installed. Otherwise, no need for this step
    CREATE USER 'ep'@'%' IDENTIFIED BY 'ep';

    log out as root and log in as ep/ep now

    If you do not have commercedb go and create database commercedb

    Locate the sql files under the ddl folder
    ddl folder has the the sql files to create the necessary data tables/records
    run the two ddl files using  $>mysql$ source c:\xx.\\.sql
    make sure you have the same database-name and the relevant password in the config/config.json first section
* How to run tests
    $npm test
* Deployment instructions
    $node server

### Contribution guidelines ###

* Writing tests
* Code review
* Other guidelines

### Who do I talk to? ###

* Repo owner or admin
* Other community or team contact# TMobile-Mock-Gateway-Proxy-NodeJS
# TMobile-Mock-Gateway-Proxy-NodeJS
