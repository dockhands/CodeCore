# Next Module
# Given an array of arrays:

# 1 | array = [[2,3,4], [5,6,7], [6,7,8]]
# Write a piece of code that will take that array and give back an array of arrays with each element multiplied by itself so you will get back:

# 1 | [[4, 9, 16], [25, 36, 49], [36, 49, 64]]

start_array = [[2,3,4], [5,6,7], [6,7,8]]
squared_array = [] 

start_array.each do |outsideIndex|

       outsideIndex.each do |num|
        squared_array << num.to_i * num.to_i
        
  end
end 

p squared_array