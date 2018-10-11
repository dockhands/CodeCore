# Implement a reduce method which takes an array, and initial value and a block as its arguments. Reduce is used to process lists (or arrays) of elements and return another value that is an aggregation of all the elements. You are not allowed to use Ruby's reduce or collect and you must use yield to execute the passed block.

# Here are some examples:

# reduce([1, 2, 3, 4, 5, 6], 0) { |total, v| total + v } # => 21

# reduce(["This", "is", "my", "sentence"], "") { |sentence, word| sentence + " " + word } # => "This is my sentence"

# reduce([6, 5, 9, 2, 1, 10, 3], Float::INFINITY) do |min, v|
#   if min > v
#     v
#   else
#     min
#   end
# end
# # => 1

# def reduce (array, start_value) { |outputArray, v| outputArray + v }

def reduce (arrayPassed, start_value)
   output = start_value
   arrayPassed.each do |v|
   output = yield(output, v) if block_given?
    
   end 
    output
end 


puts reduce([1, 2, 3, 4, 5, 6], 0) { |total, v| total + v }
puts reduce(["This", "is", "my", "sentence"], "") { |sentence, word| sentence + " " + word }

result = reduce([6, 5, 9, 2, 1, 10, 3], Float::INFINITY) do |min, v|
  if min > v
    v
  else
    min
  end
end
# => 1

print result 