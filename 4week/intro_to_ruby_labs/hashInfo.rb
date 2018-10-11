# Ask the user for personal information: first name, last name, city of birth and age. Then store that information in a hash. After that loop through the hash and display the results, for example:

# Your first name is Tam.
# Capitalize the inputs from the user if they are capitalizable.

my_hash = {} 

loop do 
puts "What's your first name?"
my_hash["first name"] = gets.capitalize.chomp

puts "What's your last name?"
my_hash["last name"] = gets.capitalize.chomp

puts "What's your city of birth?"
my_hash["birth city"] = gets.capitalize.chomp

puts "What's your age?"
my_hash["age"] = gets.chomp

break

end 

my_hash.each do |key, value|
    puts "Your #{key} is #{value}."
  end