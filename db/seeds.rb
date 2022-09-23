# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

puts "Seeding"

User.create(:username => "aakash", :email => "admin@admin.com", :password =>"123456")

Rental.create(:location =>"Denver", :description =>"2 bed", :available => true, :price =>60, :canshare => true, :picture =>"https://www.denverpost.com/wp-content/uploads/2022/05/TDP-Z-MOLLY-BROWN-HOUSE-05132022133.jpg?w=517")
Rental.create(:location =>"Broomfield", :description =>"1 bed", :available => true, :price =>30, :canshare => true, :picture =>"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLwRvqQE6Yp3AMzZEHWOrR2vj9ICQ09ZJDbg&usqp=CAU")
Rental.create(:location =>"Aurora", :description =>"3 bed", :available => true, :price =>90, :canshare => true, :picture =>"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoP25Ug14rAddlZ3blZV-ks-J1ylXi01LKqA&usqp=CAU")
Rental.create(:location =>"Arvada", :description =>"4 bed", :available => true, :price =>110, :canshare => true, :picture =>"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlz4uFPDpR15glXwF3AZ7XeiuSIwQV3q08wg&usqp=CAU")
Rental.create(:location =>"Canon City", :description =>"2 bed", :available => true, :price =>90, :canshare => true, :picture =>"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3oaU2WF-yOs5-d2xNGc-xGj-N7YolkaVImg&usqp=CAU")

puts "Success"
