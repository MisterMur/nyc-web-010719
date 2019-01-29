3.times do
  Student.create(name: Faker::Cat.name, age: (0..100).to_a.sample, module: (1..5).to_a.sample, worth: [true, false].sample)
end
