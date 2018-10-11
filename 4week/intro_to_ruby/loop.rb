sum = 0

loop do 

    puts "give me a number or type 'exit' to end"
    input = gets.chomp
    break if input == 'exit'
    sum += input.to_f
end 

puts sum