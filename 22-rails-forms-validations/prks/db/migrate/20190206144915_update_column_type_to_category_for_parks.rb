class UpdateColumnTypeToCategoryForParks < ActiveRecord::Migration[5.2]
  def change
    rename_column :parks, :type, :category
  end
end
