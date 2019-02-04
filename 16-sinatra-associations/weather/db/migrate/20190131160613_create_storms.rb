class CreateStorms < ActiveRecord::Migration
  def change
    create_table :storms do |t|
      t.string :name
      t.string :flavor
      t.timestamps null: false
    end
  end
end
