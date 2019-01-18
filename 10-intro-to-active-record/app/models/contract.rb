class Contract < ActiveRecord::Base
  # contract belongs_to show
  # contract belongs_to actor
  belongs_to :show
  belongs_to :actor

  # def actor
  #   Actor.all.find do |actor|
  #     actor.id == self.actor_id
  #   end
  #   # Actor.find(self.actor_id)
  # end

  # def show
  #   Show.all.find do |show|
  #     show.id == self.show_id
  #   end
  # end
end
