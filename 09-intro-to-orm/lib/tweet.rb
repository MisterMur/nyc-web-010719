module ActiveRecord
  class Base
    def self.all
      # row => instance
      sql = <<-SQL
        SELECT * FROM #{self.class.to_s.pluralize};
      SQL

      # naive
      rows = DB[:conn].execute(sql)
      rows.each do |row|
        puts "infinite loop?"
        instance = ALL.find do |inst|
          inst.id == row["id"]
        end
        if !instance
          self.class.new(row)
        end
      end
      ALL
    end
  end
end

# Tweet Class => model => table
class Tweet < ActiveRecord::Base
  attr_accessor :message, :username
  attr_reader :id # this will be that id from the database

  ALL = [] # represent the rows in your database
  # class constant vs class variable
  # @@all = []

  # I want to get everything from the database


  # metaprogramming
  def initialize(props={})
    @message = props['message']
    @username = props['username']
    @id = props['id']
    ALL << self
  end

  # I want to save to the database
  # probably not
  # If it's already been saved...
  # overwrite
  def save
    # 1. What am I saving?
    # 2. input => username, message

    # if i saved
    #   update OI don't want to do thjis!!!
    # else

    sql = <<-SQL
      INSERT INTO tweets (username, message)
      VALUES (?, ?);
    SQL

    # SQL Injection, parameterize

    DB[:conn].execute(sql, self.username, self.message)
    @id = DB[:conn].execute("SELECT * FROM tweets").last["id"]
  end
end
