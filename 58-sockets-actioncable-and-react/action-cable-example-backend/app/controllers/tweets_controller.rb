class TweetsController < ApplicationController

  def create
    tweet = Tweet.new(content: params[:content], feed_id: 1)
    if tweet.save
      # thes server knows about the new tweet
      # we need to send out a message

      # (the channel, the message (the payload))
      ActionCable.server.broadcast("feed_channel", tweet)
      ActionCable.server.broadcast("feed_channel", {something: 'else'})
      render json: tweet
    else
      render json: {error: 'Could not create that tweet'}, status: 422
    end
  end

end
