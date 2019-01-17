Intro to SQL
============

## SWBATs

- Explain persistence and the need for using SQL
- Define SQL
- Explain the difference between SQLite3 and SQL
- Explore provided data through SQLite Browser
- Perform CRUD actions on a single table
- Perform CRUD actions across related tables

SQL => Structured Query Language

database => holds information! => structured
persistence => hdd, text file

excel

relational databases => sqlite, postgres, sql server, db2, oracle
primary keys <= every table will have one
foreign keys <=

mongo, redis, nosql

sqlite => it's nice and small, it's also very very widely used, embeddable
postgres => handle more data

SQL vs sqlite <=
  - not the full verion?\
  - SQL is the language that SQLite uses?
  - the spelling, the casing
- declarative vs imperative
  - each <== thinking step by step
  - map, select, find <== declarative

CRUD => acronym => supposed to be everything we can possibly do with data
C - Create
R - Read
U - Update
D - Delete

Collect, Read
Create, Upload
Revise, Update, Undo
Delete, Desecrate

## Setup

1. Install the SQLite Browser if you haven't already [here](http://sqlitebrowser.org/)
2. Open the SQLite Browser and click 'File -> Open DataBase'
3. Choose the `chinook.db` file from this repo. This database is open source and maintained by Microsoft (SQL is no fun if you don't have any data)
4. Click the tab that says 'Execute SQL'. Type SQL queries in the box above. Press the play button. See the results of that query in the box below

## Challenges

Concert database, Record Company, Record Store

1. Write the SQL to return all of the rows in the artists table?

CRUD => Read

```sql
SELECT *
FROM artists;
```

2. Write the SQL to select the artist with the name "Black Sabbath"

Read
dclarative nature of SQL

```sql
SELECT *
FROM artists
WHERE name = "Black Sabbath";
```

3. Write the SQL to create a table
named 'fans'
with an autoincrementing ID => that's a primary key => it's just the id
  => a unique identifier for a row in a table
and a name field of type text

Create -> table

```sql
CREATE TABLE fans (
    id int primary key,
    name text
);
```

4. Write the SQL to alter the fans table to have a artist_id column type integer?

Update => changing column

```sql
ALTER TABLE fans
ADD COLUMN artist_id INTEGER;

```

DELETE -> let's do that this afternoon...

5. Write the SQL to add yourself as a fan of the Black Eyed Peas? ArtistId **169**

```sql

```

6. Check out the [Faker gem](https://github.com/stympy/faker). `gem install faker`, open up irb, run `require 'faker'` and then generate a fake name for yourself using `Faker::Name.name`. How would you update your name in the fans table to be your new name?

```sql

```

7. Write the SQL to return fans that are not fans of the black eyed peas.

```sql

```

8. Write the SQL to display an artists name next to their album title

CRUD => Read

```sql
SELECT artists.name, albums.title
FROM artists
JOIN albums
ON artists.ArtistId = albums.ArtistId;
```

9. Write the SQL to display artist name, album name and number of tracks on that album

```sql

```

10. Write the SQL to return the name of all of the artists in the 'Pop' Genre

```sql

```

## BONUS (very hard)

11. I want to return the names of the artists and their number of rock tracks
    who play Rock music
    and have move than 30 tracks
    in order of the number of rock tracks that they have
    from greatest to least

```sql

```
