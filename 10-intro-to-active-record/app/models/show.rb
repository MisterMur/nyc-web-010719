class Show < ActiveRecord::Base
  # show has_many contracts
  # show has_many actors through contracts
  has_many :contracts
  has_many :actors, through: :contracts

  # attr_

  # there's bnothing in here>?!??@?Enum
  # where is that coming from????
  # def contracts
  #   Contract.all.select do |contract|
  #     contract.show == self
  #   end
  # end

  # def actors
  #   self.contracts.map do |contract|
  #     contract.actor
  #   end
  # end
end
