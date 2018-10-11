my_array = [['john', 'steve', 'jen'],
 ['ate', 'sat on', 'bought'],
 ['an apple', 'the couch', 'a toothbrush']]


 sentence = my_array.map do |word|
     " #{word[rand(3)]}"
end 

puts sentence.join(" ")
