# Write a code that takes an array and then returns another array that contains all the numbers that are greater than 10. The code should not fail if the array contains strings / non-number elements. for example, this array:

# 1 | my_array = [1,4,5,23,14,"Hello there", false, nil]
# Should return:

# 1 | [23,14]

my_array = [1,4,5,23,14,"Hello there", false, nil, 19]

greater_than_10 = []

for element in my_array
    
    if !(element.instance_of? Fixnum) 
        puts "it's not number!"
    elsif element > 10 
        greater_than_10  << element
       
    end 

  
end
puts  greater_than_10 


# puts questions.select { |each_q|  each_q.length > 15   } 