# Intro to ORMs (Object Relational Mappers)

## SWBATs

* Understand the need to being organizing your code
* Define Object Relational Mapper (ORM)
* Distinguish between ORM and SQL
* Demonstrate that ORMs are the pattern connecting scripting languages and databases
* Explain how the `sqlite` gem works as a driver or wrapper around SQL
* Implement HEREDOCs to be saved in variables to be executed by SQL driver
* Perform persistent CRUD actions on two separate models

## Lecture Notes

1. Books and Authors where each book has a single author. Books should have a title

  one-to-many

  authors
  primary key
  id           | name             | age
  1            | Jack Kerouac     | too old
  2            | George RR Martin | 70 something

  books
  primary key                            foreign key
  id          | genre | title          | pages | author_id
  1           | beat  | big sur        | 200   | 1
  2           | ????  | on the road    | 1     | 1
  3           |       | game of thrones| 34234 | 2


JOIN class => many-to-many

  Q: Write the SQL to find all books written by a certain author given that author's id, "Jack Kerouac"

  ```SQL
  SELECT *
  FROM books
  WHERE author_id = 1

  SELECT name, title
  FROM books
  JOIN authors
  ON authors.id = books.author_id
  WHERE authors.name = "Jack Kerouac";
  ```

2. Books and Authors where each book can have one or MULTIPLE authors. Books should have a title and authors should have a name.

  - What type of relationship is this?
  - many-to-many

  authors
  primary key
  id           | name             | age
  1            | Jack Kerouac     | too old
  2            | George RR Martin | 70 something

  books
  id          | genre | title          | pages
  1           | beat  | big sur        | 200   
  2           | ????  | on the road    | 1     
  3           |       | game of thrones| 34234

  author_books
  id | book_id | author_id
  1  | 1       | 1
  2  | 2       | 1
  3  | 3       | 2


1           | beat  | big sur        | 200   | 1  | 1       | 1 | 1            | Jack Kerouac     | too old
2           | ????  | on the road    | 1     | 2  | 2       | 1 | 1            | Jack Kerouac     | too old
3           |       | game of thrones| 34234 | 3  | 3       | 2 | 2            | George RR Martin | 70 something

  Q. Write the SQL to find all books written by certain author given their name

  ``` SQL
  SELECT *
  FROM books
  JOIN author_books
  ON books.id = author_books.book_id  
  JOIN authors
  ON author_books.author_id = authors.id
  WHERE authors.name = "Jack K"
  ```

3. Squirrels have Nests in Trees -- Build table

  ```
  squirrels
  id |  name
  1     'chipper'          
  2     'alvin'   
  3     'theo'                 
  4     'simon'            

  nests
  id |  squirrel_id | tree_id
  1     1             1
  2     2             1
  3     3             2
  4     4             1
  4     4             2

  trees
  id |  name
  1     apple tree
  2     christmas tree
  3     old tree
  ```

Q: Write the SQL to find all Squirrels in a "christmas tree"


```SQL

```


## Object Relational Mapper (ORM)

### CRUD REVIEW

What are the four ways we can interact with Data?

CRUD => Create, Read, Update, Delete
- databases => SQL
- Ruby => objects in memory => disappear after the program exits

access it, reuse, analyze it, change it
phone, video games, facebook (D), gmail <= server farms, databases
spreadsheet, files, piece of paper

if we can do it with ruby, we can not learn SQL
- ORM => be able to communicate with a database without writing raw SQL
  - Object => Objects, Ruby, everything
  - Relational => many-to-many, object relations
  - Mapper => .map
    => mapping something => the tables in your databases, those rows => objects, in ruby

Ruby to a databases => Active Record
- orm allows our scripting language to communicate with a database
- the layer between ruby and sql/database
- the library that is most popular in Ruby is Active Record

Write Ruby => runs SQL

Create
- SQL => Create Table, INSERT INTO
- Ruby => class .all   .new()

Read
- SQL => SELECT
- Ruby => puts, method, attr_readers

Update
- SQL => ALTER, CHANGE, UPDATE
- Ruby => =, attr_writers

Delete
- SQL => DELETE
- Ruby => .clear, shift, delete_at, pop

### Active Record Pattern

- each table in our DB should correspond to a ruby class (Model)
- table is ALWAYS plural and the Model/Class is Singular
- instances of one of those classes are represented as a row in our DB
- each column represents an attribute on each instance

### How to persist Data?


## Code Walkthrough

- bin/run.rb
- config/environment.rb
- Gemfile
- db/twitter.db
- lib/tweets.rb && lib/tweets_app.rb
- Rake
  - Creating a new rake task - `rake -T`

```
A tweet belongs to a user and has some message content - must have user_id

The belongs_to must have a user_id on it

A user has a username, and has many tweets

A tweet can have many tags and a tag can have many tweets
```

## Review Questions

### CRUD in SQL and Ruby

* What are the 4 ways we can interact with data?
* How do we write these in SQL?
* How do we want to write these in Ruby?
* How do we map these SQL applications to Ruby?

### ORM Pattern

* each table in the db should correspond to our ruby class (models)
* each row represents an instance in the database
* each column represents an attribute for our instances
* why do we need a database? persistence

### One to Many Relationship in SQL

* Foreign key versus primary key
* Which table is the foreign key placed on? (has many or belongs to)
* Show the pain of not putting the foreign key on the child
* Find all books written by a certain author by ID

### Many to Many Relationship in SQL

* how do we implement an author having many books and a book having many authors
* join table having two foreign keys
* write the sql to find all books written by a certain author given their name
* highlight order of writing sql syntax
* another example with tweets and tags

### Selecting and Inserting

* Working with SQLite3 Gem in the console
* class with attributes and initialize method
* write all class method with db execute call
* map results from select * to create new tweet instances
* mass assignment
* adding IDs to mapped instance

### Saving and Updating

* writing the save method
* parameterized queries and database security
* what's the difference between calling new and create?
