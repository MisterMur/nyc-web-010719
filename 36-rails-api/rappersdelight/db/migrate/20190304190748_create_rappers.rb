class CreateRappers < ActiveRecord::Migration[5.2]
  def change
    create_table :rappers do |t|
      t.string :rap_name
      t.string :hood
      t.integer :albums

      t.timestamps
    end
  end
end
