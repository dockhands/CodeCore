# Create a method, most_common_letter, that takes a string as an argument and returns the most common letter in the string. Ignore special characters and include numbers.

# Example usage:

# most_common_letter("aaaabbc") # => "a"
# most_common_letter("T a d c g d g d d n") # => "d"
# most_common_letter("1111 monkeys on the wall") # => "1"

string_a = "aaaabbc"
string_b = "T a d c g d g d d n"
string_c = "1111 monkeys on the wall"

def most_common_letter (string)
    hash = {}
    string.gsub!(/[^0-9A-Za-z]/, '')
    arrayString = string.split("")

    arrayString.each do | char| 
    if hash.key?(char)
        # puts "The duplicate character is #{char}"
        hash[char] += 1
    
        else
        hash[char] = 1
        end
    end 
    # hash
    hash.each { |k, v| puts k if v == hash.values.max }

end 
   
puts "Most common character in A is: " 
  puts most_common_letter(string_a)

# puts hash.each { |k, v| puts k if v == hash.values.max }

puts "Most common character in B is: " 
 puts most_common_letter(string_b)

puts "Most common character in C is: " 
 puts most_common_letter(string_c)