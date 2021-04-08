# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
user1 = User.create email:"something@email.com", password:"something", password_confirmation:"something"
user2 = User.create email:"someone@email.com", password:"something", encrypted_password:"something"

apartments = [
  {
    id: 1,
    street: '42 Waluby Way',
    city: 'Sidney',
    state: 'Austrilia',
    manager: 'P Sherman',
    email: 'sherman@apartments.com',
    price: '$3500',
    bedrooms: 4,
    bathrooms: 2,
    pets: 'fish welcome!',
    user_id:user1.id
  },
  {
    id: 2,
    street: '456 Sesame St',
    city: 'Muppet Land',
    state: 'CA',
    manager: 'Big Bird',
    email: 'bb@apartments.com',
    price: '$5000 a month',
    bedrooms: 8,
    bathrooms: 4,
    pets: 'muppets only!',
    user_id:user2.id
  },
  {
    id: 3,
    street: '123 Main St',
    city: 'San Diego',
    state: 'CA',
    manager: 'Elyse',
    email: 'elyse@apartments.com',
    price: '$2000 a month',
    bedrooms: 3,
    bathrooms: 2,
    pets: 'cats and medium sized dogs',
    user_id:user1.id
  },
]

apartments.each do |apartment|
  Apartment.create apartment
  puts "creating the apartment: #{apartment}"
end
