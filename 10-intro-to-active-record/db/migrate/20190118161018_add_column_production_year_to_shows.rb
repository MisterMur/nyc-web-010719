class AddColumnProductionYearToShows < ActiveRecord::Migration[5.2]
  def change
    add_column :shows, :production_year, :integer
  end
end
