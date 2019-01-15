class Comedian

  attr_reader :name

  def initialize(name)
    @name = name
  end

  def jokes
    Joke.all.select do |joke|
      joke.comedian == self
    end
  end

  def subjects
    jokes.map do |joke|
      joke.subject
    end
  end

  def write_joke(subject, text)
    Joke.new(self, subject, text) 
  end
end
