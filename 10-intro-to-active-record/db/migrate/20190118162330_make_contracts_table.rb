class MakeContractsTable < ActiveRecord::Migration[5.2]
  def change
    create_table :contracts do |t|
      # - money
      # - actor_id
      # - show_id
      t.integer :money
      t.integer :actor_id
      t.integer :show_id
    end
  end
end
