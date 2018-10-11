# Ask the user for the following information: first name, last name and age.

# Then ask them for cities they've visited (they can keep entering until they type "done").

# Store all the entered data in a hash and then loop through the hash and display results.

cities = []


print "What your first name"
name= gets.chomp

print "What your age"
age= gets.chomp

loop do 
print "What cities you been to (or press done)"
city= gets.chomp

if city == 'done'
break 
else 
cities << city 


user = { 
    name: name,
    age: age,
    cities: cities 
}

end 
puts user
end 
