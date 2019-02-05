# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Storm.destroy_all

puts "Hey I'm making some storms"
Storm.create(victims: 10000, flavor: "meatballs", name: "spaghetti")
Storm.create(victims: 9000, flavor: "chocolate", name: "hershey")
Storm.create(victims: 8000, flavor: "blue blueberry", name: "blue?")
puts "storms made!"
