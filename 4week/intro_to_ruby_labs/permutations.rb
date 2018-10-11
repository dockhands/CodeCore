# Ask the user for for three inputs and then print out all the possible permutations for the user inputs. For instance if the users inputs `a`, `b` and `c` you should print out:

puts "Give me first entry plz"

firstInput = gets.chomp

puts "Give me second entry plz"

secondInput = gets.chomp

puts "Give me third entry plz"

thirdInput = gets.chomp

inputs = [firstInput,secondInput,thirdInput]

print inputs.permutation.to_a


exit
