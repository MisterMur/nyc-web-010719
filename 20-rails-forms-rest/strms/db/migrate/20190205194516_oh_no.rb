class OhNo < ActiveRecord::Migration[5.2]
  def change
    add_column :storms, :city_id, :integer
  end
end
