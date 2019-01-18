class Actor < ActiveRecord::Base
  has_many :contracts
  has_many :shows, through: :contracts

  # barren wasteland
  # def contracts
  #   Contract.all.select do |contract| # contract instance
  #     contract.actor == self
  #   end
  # end

  # def shows
  #   self.contracts.map do |contract|
  #     contract.show
  #   end
  # end
end
