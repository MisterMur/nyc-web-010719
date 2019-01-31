class CreateVictims < ActiveRecord::Migration
  def change
    create_table :victims do |t|
      t.string :name
      t.integer :age
      t.boolean :survive
      t.integer :storm_id
      t.timestamps null: false
    end
  end
end
