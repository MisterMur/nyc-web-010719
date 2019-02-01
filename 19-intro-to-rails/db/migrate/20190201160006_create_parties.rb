class CreateParties < ActiveRecord::Migration[5.2]
  def change
    create_table :parties do |t|
      t.string :location
      t.integer :number_of_attendees
      t.string :food_type

      t.timestamps
    end
  end
end
