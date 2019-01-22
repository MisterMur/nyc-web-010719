# 'https://www.googleapis.com/books/v1/volumes?q=ruby+programming'
# rest-client
require 'pry'
require 'json'
require 'rest-client'

# Classes

# Book (model <- class that represents data (that inherits from < ActiveRecord::Base, that has a table in the db))
# Author model
# Review model

# Adapter class
# class GoogleBookFetcher

# end

# CLI class
# single responsibility: getting user input, and outputting messages to user


GoogleBookFetcher.new.fetch_books("ruby programming")

# * Write an application that takes a search term from a user
# * Make a Request to the GoogleBooks API and get back some results
#   * https://www.googleapis.com/books/v1/volumes?q=ruby+programming
# * Display the titles, author names, and description for each book

# response = make_a_request("https://www.googleapis.com/books/v1/volumes?q=ruby+programming")
# data = turn_into_a_hash(response)

puts "Enter a book subject to search for: "
input = gets.chomp


response = RestClient.get("https://www.googleapis.com/books/v1/volumes?q=#{input}")
book_data = JSON.parse(response.body)

# title
# book.fetch("volumeInfo").fetch("title")

# authors
# book.fetch("volumeInfo").fetch("authors").join(" & ")

# @ desc
# book["volumeInfo"]["description"][0..100]

def get_title(book_info)
  fetch?(book_info, "title")
end

def get_authors(book_info)
  all_authors = fetch?(book_info, "authors")
  if all_authors
    all_authors.join(" & ")
  else
    "No authors found for this book"
  end
end

def get_description(book_info)
  full_description = fetch?(book_info, "description")

  if full_description
    full_description[0..100]
  else
    "No description found..."
  end
end


def print_book(title, authors, description)
  puts "Title: #{title}"
  puts "Authors: #{authors}"
  puts "Description: #{description}"
  puts "*" * 30
end

def fetch?(book, key)
  book[key]
end

book_data["items"].each do |book|
  # title
  book_info = book.fetch("volumeInfo")

  title = get_title(book_info)
  authors = get_authors(book_info)
  description = get_description(book_info)


  print_book(title, authors, description)
end
# binding.pry

"bye"
