module ModuleName
  # why do that?
  module InstanceMethods
    def walk
      puts "I am walking."
    end
  end

  module ClassMethods
    def walk
      puts "I am walking other stuff."
    end
  end
end
