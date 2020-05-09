Title: Using Postgres on command line
Date:  2015-11-04 13:10
Modified:  2015-11-04 13:10
Category: Linux
Tags: Postgres, CLI, PSQL, psqlrc
Slug: using-postgres-on-command-line
Authors: Guido Percú
Summary: Learn how to be productive in psql, Postgres command line interface.

Postgres has a nice utility to work with database. You can modify the default behavior in your *~/.psqlrc* file.

![Example of a customized PSQL Shell](/images/2015/11/psql-example.png)

```
-- By default NULL displays an invisible character on the string.
-- Make it say "[NULL]"
\pset null '[NULL]'
-- Ignore duplicated rows in the history log
\set HISTCONTROL ignoredups
-- Autocomplete keywords in uppercase (SELECT, WHERE, ...)
\set COMP_KEYWORD_CASE upper
-- Shows how much time it took to run the last query
\timing
-- Formats the results of the query according to the width of your screen.
\x auto'
```
