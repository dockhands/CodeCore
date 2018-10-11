# Ask the user for a number x and then print the first x prime numbers. Prime numbers are divisible only by 1 and themselves.

puts "Give me first entry plz"

howMany = gets.to_i

# numbers we want to check if prime 
for number in 1..howMany
  is_prime(number)
  puts prime_number

end

# for number in 1..howMany
#     if !(number%2 == 0 || number%3 == 0 || number%4 == 0 || number%5 == 0) 
#     puts number
# end 

# end
def is_prime(number)

    prime_number = []
     for divider in 2..howMany
        # if number IS NOT divisible by x, then print number 
        if (number%divider != 0) 
            prime_number.push(number)
        else 
            
        end

    end
    
 end