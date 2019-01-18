class CreateShows < ActiveRecord::Migration[5.2]
  # are meant to change your database
  def change
    # change a column, it's going to change something
    create_table(:shows) do |t| # table
      t.column :episode, :text
      t.column :season, :integer
      t.text :genre
      # Other fields here
    end

  end
end

# there is a purpose behind this timestamp
# 2019 01 18 152608
# 2019 01 18 152839
