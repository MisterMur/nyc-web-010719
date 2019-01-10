class Tweet
  attr_reader :message, :user

  @@all = []

  # Tweet#message that returns a string <-- super descriptive
  # def message
  #   # @@message # 2, things on the entire class
  #   @message  # others
  # end
  def initialize(message, user)
    @message = message
    @user = user

    @@all << self
  end

  # Tweet#user that returns an instance of the user class
  # def user
  #   # what do we do now?
  #   @user
  # end

  # Tweet.all that returns all the Tweets created.
  def self.all
    @@all
  end

  # Tweet#username that returns the username of the tweet's user
  def username
    # @user.username
    self.user.username # a User instance
    # User.all.select
  end

  # references
  def self.print
    self.all.each do |tweet|
      puts tweet.message
      puts tweet.username
    end
  end

end
