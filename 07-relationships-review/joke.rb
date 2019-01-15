class Joke
  attr_reader :comedian, :subject, :text

  @@all = []

  def initialize(comedian, subject, text)
    @comedian = comedian
    @subject = subject
    @text = text
    @@all << self
  end

  def self.all
    @@all
  end

end
