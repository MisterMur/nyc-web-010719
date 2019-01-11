class User
  attr_reader :username

  #initialize which takes a username and have a reader method for the username
  def initialize(username)
    @username = username
  end

  #tweets that returns an array of Tweet instances
  def tweets
    # cannot write this yet because I can't even test it
    # 1. they keep track of their tweets => []
    # 2. they figure it out
    Tweet.all.select do |tweet| # Tweet instance
      # I am the user asking for my tweets
      # I want to know which tweets are ME (I, my, myself, self)
      tweet.user == self
      # comapre it to the information being held in the tweet
      # specifically, the reference they are holding
    end

    # so efficiency => don't think about it
    # refactor, indexes
  end

  #post_tweet that takes a message,
  # creates a new tweet,
  #  and adds it to the user's tweet collection
  def post_tweet(message)
    Tweet.new(message, self) # I am myself
  end
end
