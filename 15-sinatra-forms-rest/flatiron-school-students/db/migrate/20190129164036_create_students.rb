class CreateStudents < ActiveRecord::Migration
  def change
    create_table :students do |t|
      t.string :name
      t.integer :age
      t.integer :module
      t.boolean :worth # unsure what this means...
    end
  end
end
