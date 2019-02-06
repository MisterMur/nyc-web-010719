class Park < ApplicationRecord
  validates :name, :location, :category, presence: true

  validate :category_must_be_size, :another

  # it depends
  def category_must_be_size
    if !["big", "medium", "small"].include?(category)
      errors.add(:category, "not a good size")
    end
  end


end
