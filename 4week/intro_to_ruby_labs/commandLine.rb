# How many sides does a hexagon have?

# 1- five
# 2- six
# 3- seven

# Enter the correct number:

puts "How many sides does a hexagon have?"
puts "1- five"
puts "2- six"
puts "3- seven"
print "Enter the correct number: " 

firstGuess = gets.to_f 
correctAnswers = 0;

if firstGuess == 2 
    correctAnswers += 1
else correctAnswers += 0
end 

puts "How many dogs are playing poker in Coolidge's dog poker painting?"
puts "1- five"
puts "2- six"
puts "3- seven"
puts "4- eight"
print "Enter the correct number: " 

secondGuess = gets.to_f 

if secondGuess == 3
    correctAnswers += 1
else correctAnswers += 0
end 


puts "How many o's in the word dog?"
puts "1- one"
puts "2- two"
puts "3- three"
puts "4- four"
print "Enter the correct number: " 

secondGuess = gets.to_f 

if secondGuess == 1
    correctAnswers += 1
else correctAnswers += 0
end 

percent = correctAnswers.to_f/3 

puts "percent should equal: " + percent.to_s

puts "You scored #{percent}%, you got #{correctAnswers} out of 3 questions correctly"



# You scored 66%, you got 2 out of 3 questions correctly.]]>