class Dog < Pet
  include ModuleName::InstanceMethods

  def initialize(name, num_walks)
    @num_walks
    super(name)
  end

  # def walk
  #   puts "I am walking."
  # end
end
