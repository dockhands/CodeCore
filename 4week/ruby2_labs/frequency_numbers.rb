# Given an array of number such as:

# array = [1, 2, 3, 4, 4, 4, 2, 3, 3, 3]
# Write a method, frequency_of_numbers, that will generate a hash of frequencies that looks like:

# {1 => 1, 2 => 2, 3 => 4, 4 => 3}
# Attempt to do the exercise in one line of code using methods like each_with_object.

array1 = [1, 2, 3, 4, 4, 4, 2, 3, 3, 3]
def frequency (array)

    array.each_with_object(Hash.new(0)) {|hash, key| hash[key] += 1}
end 


puts frequency(array1)


