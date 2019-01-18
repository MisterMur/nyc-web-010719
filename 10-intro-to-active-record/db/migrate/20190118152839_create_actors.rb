class CreateActors < ActiveRecord::Migration[5.2]
  def change
    create_table :actors do |t| # table
      t.text :name
      t.integer :experience
    end
  end
end
