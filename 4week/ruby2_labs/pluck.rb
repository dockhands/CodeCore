# Next Module
# Implement a `pluck` method, which takes an array of hashes and a key name, and returns an array containing the values for each named key in the hash.

# For example:

# pluck([{a:1}, {a:2}], :a)  ## returns [1,2]
# pluck([{b:2}, {a:4, b:4}, {a:1}, {c:4}], :a) ## returns [nil, 4, 1, nil]
# pluck([{b:2}, {a:4, b:4}, {a:1}, {c:4}], :b) ## returns [2,4,nil,nil]
# If an hash is missing the property, you should just leave it as nil in the output array.

array_1 = [{a:1}, {a:2}]
array_2 = [{b:2}, {a:4, b:4}, {a:1}, {c:4}]
array_3 = [{b:2}, {a:4, b:4}, {a:1}, {c:4}]

def pluck (array, key_name)
    puts "running pluck" 

    return_array= []
    
    array.each do |hash|

        hash.each do |key, value|
             if key == key_name
                return_array << value 
                
             else 
                value = nil
                return_array << value 
             end 
           
        end
        
    end
    puts "this is the return_array: #{return_array}"
end 

# pluck(array_1, :a)
pluck(array_2, :a)
#pluck(array_3, :b)