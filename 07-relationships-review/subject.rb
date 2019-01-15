class Subject
  attr_reader :title

  @@all = []

  def initialize(title)
    @title = title
    @@all << self
  end

  def self.all
    @@all
  end

  def jokes
    Joke.all.select do |joke|
      joke.subject == self
    end
  end

  def comedians
    jokes.map do |joke|
      joke.comedian
    end
  end

  def self.find_by_title(title)
    Subject.all.find do |subject|
      subject.title == title
    end
  end

  def self.most_common_subject #Coming next: map jokes into subjects and find most common occurance
    #find the most common subject by using the length of the jokes array
    Subject.all.max_by do |subject|
      subject.jokes.length
    end




    # hash_of_subjects = Hash.new(0)
    # Joke.all.each do |joke|
    #   hash_of_subjects[joke.subject.title] += 1
    # end
    # binding.pry
    # arr = hash_of_subjects.max_by {|key, val| val }
    # title = arr.first
    # self.find_by_title(title)
    #find the subject where title == subject.title
  end
end
