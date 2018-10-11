my_array = [['john', 'steve', 'jen'],
 ['ate', 'sat on', 'bought'],
 ['an apple', 'the couch', 'a toothbrush']]

 puts my_array[0][rand(0..2)]   + " " + my_array[1][rand(0..2)] + " " + my_array[2][rand(0..2)]


#  + " " + my_array[1][rand(0..2) + " " + my_array[2][rand(0..2)

my_array.each do |word|
    print " #{word[rand(3)]}"
end 
puts " " 