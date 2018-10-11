# Next Module
# Keep asking user for input and add their input to an array until they type "exit".

# After that print out the number of input they've entered and the words. For example print:

# You've entered 5 words:

# Hi
# Hello
# Hey
# What's up?
# Bye

words = []
counter = 0;
loop do 

    counter +=1
    puts "give me some numbers!" 
    input = gets.chomp
    break if input == 'exit'

    words << input 

   
end 
p "You have entered #{counter} words: "
puts words 