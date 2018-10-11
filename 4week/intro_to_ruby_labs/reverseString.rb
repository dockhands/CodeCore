# Ruby String class comes with a `reverse` method that reverses the order of characters in a string:

# 1 | greeting = "hello"
# 2 | puts greeting.reverse # olleh
# Write a code that gives the same outcome of the reverse method. You can use any method from the Array class.

# greeting = "hello".split(//).reverse.join 
# # puts greeting 

greeting = "despite what critiques say, 'Peppa the Pig' is a decent show"
reverseGreeting = []

index = greeting.length
loop do
  index -= 1
  reverseGreeting <<  greeting[index]
  if index == 0
    break       # this will cause execution to exit the loop
  end
end


puts reverseGreeting.join