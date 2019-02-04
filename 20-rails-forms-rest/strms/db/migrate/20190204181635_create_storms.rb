class CreateStorms < ActiveRecord::Migration[5.2]
  def change
    create_table :storms do |t|
      t.integer :victims
      t.string :flavor
      t.string :name

      t.timestamps
    end
  end
end
