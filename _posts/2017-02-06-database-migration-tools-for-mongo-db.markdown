---
layout: post
title:  "Database Migration tools for Mongo DB"
date:   2017-02-06 11:29:52 +0300
permalink: database-migration-tools-for-mongo-db
tags: mongodb java migrations
---
![My helpful screenshot]({{ site.url }}{{ site.baseurl }}/assets/images/MongoDB-Logo-5c3a7405a85675366beb3a5ec4c032348c390b3f142f5e6dddf1d78e2df5cb5c.png)

When it comes to the problem of migrating database structure, some of you may think about relational databases: there is a strict schema, and to remove something(field, table, index, etc.), you need to take action: execute an SQL statement. But when you work on schema-less databases, it may look like you don't need those migrations. But to be honest, are schema-less database are schemaless? In fact, you have more freedom in column and document-based database, but sooner or later you will have to modify some of the results of your work: remove the index, transform column format, etc. That's why with the help of this article I would like to review the available tools for Mongo migrations.

### Mongobee

If you use Spring in your project, then MongoBee should be the most suitable tool for you. The idea is that you write Java methods(changesets), which describe what changes need to be done. The method annotated by @ChangeSet is taken and applied to the database. Mongobee stores changesets history in dbchangelog collection. If you are a Spring guy, and like Java config among others, then you should choose this tool.

You have two options how to run Mongobee - inside Spring container at the beginning of startup or as an independent process, running separately from Spring.

The first option is good for the local environment when you have a local database and want to keep it up-to-date with shared one:

```
@Bean
public Mongobee mongobee(){  
  Mongobee runner = new Mongobee("mongodb://YOUR_DB_HOST:27017/DB_NAME");
  runner.setDbName("yourDbName");  // host must be set if not set in URI
  runner.setChangeLogsScanPackage(
       "com.example.yourapp.changelogs"); // package to scan for changesets
  runner.setEnabled(true);         // optional: default is true

  return runner;
}
```