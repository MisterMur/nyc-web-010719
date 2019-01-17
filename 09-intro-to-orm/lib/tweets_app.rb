class TweetsApp

  def call
    puts 'Welcome to Twitter'

    puts 'Enter a username:'
    username = gets.chomp

    puts 'Enter a message:'
    message = gets.chomp

    # nothing is persisting
    tweet = Tweet.new({'username' => username, 'message' => message})
    tweet.save # video game
    # save to database
    # binding.pry

    tweets = Tweet.all
    # get everything from the database
    render(tweets)
  end

  private

  def render(tweets)
    tweets.each.with_index(1) do |tweet, i|
      puts "#{i}. #{tweet.username} says: #{tweet.message}"
    end
  end
end
