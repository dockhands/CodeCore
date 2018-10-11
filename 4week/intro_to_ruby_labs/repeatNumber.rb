# Next Module
# You are given an array with numbers between 1 and 1,000,000. One integer is in the array twice. How can you determine which one? Can you think of a way to do it using little extra memory?

# Solve it in two ways: one using hashes and one without.

my_array = [2,3,4,5,6,6,7,8]

hash = Hash.new(0)
my_array.find { |each| (hash[each] += 1) == 2 
} # => 'the"

a = ["a", "b", "c", "d"]
h = Hash[a.map {|x| [x, 1]}]