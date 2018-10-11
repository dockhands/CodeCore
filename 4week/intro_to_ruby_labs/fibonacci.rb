# Next Module
# Given a number N from the user. Generate an array that contains the first N numbers of the fibonacci sequence.

# note: In mathematics, the Fibonacci numbers or Fibonacci series or Fibonacci sequence are the numbers in the following integer sequence:

# 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, ...

# The sequence starts with 1 and then every number is the sum of the two previous numbers.


puts "Give me a number pzzz"

how_high = gets.to_f

index = 0 
result = 0
result_1 = 1
result_2 = 0
loop do 

    result =  result_1 + result_2
    result_2 = result_1
    result_1 = result 
    index +=1 

    puts result 
    puts "index equals #{index}"
    if index == how_high 
        break 
       
    end 
end 
