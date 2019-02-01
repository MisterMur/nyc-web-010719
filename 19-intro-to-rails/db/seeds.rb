# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Party.create(location: "Sivans house", number_of_attendees: 10000, food_type: "bar")

Party.create(location: "Humzahs house", number_of_attendees: 0, food_type: "ramen")
