class FeedChannel < ApplicationCable::Channel
  def subscribed
    # string must be unique
    stream_from "feed_channel"
    # stream_for @dog
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end
end
