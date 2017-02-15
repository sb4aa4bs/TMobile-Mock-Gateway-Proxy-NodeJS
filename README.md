# README #

This is the server side code for tmobile-server.

### What is this repository for? ###

* Quick summary
* Version
* [Learn Markdown](https://bitbucket.org/tutorials/markdowndemo)

### How do I get set up? ###

* Summary of set up

* Configuration

    node and npm is a must on your machine, so install
    Once you get or clone the code go to the directory and then do $npm install
    This command should get all the packages neccesary to run

* Dependencies
* Database configuration
    make sure you install mysql 5.6
    create a user ep/ep if you do not have Elastic Path installed. Otherwise, no need for this step
    switch do the database using 'use commercedb'

    ddl folder has the the sql files to create the necessary data tables/records
    run the two ddl files using  $>mysql source c:\xx.\\.sql
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
* Other community or team contact