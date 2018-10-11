
num = 1

fizzBuzzArray = []

for num in 1..100
    
    if num %5 == 0 && num %3 == 0
    fizzBuzzArray.push("FizzBuzz")
        
    elsif num %3 == 0 
        fizzBuzzArray.push("Fizz")
    elsif num %5 == 0
        fizzBuzzArray.push("Buzz")
    else  
        fizzBuzzArray.push(num)
    end
end 

print fizzBuzzArray

# num = 1
# for num in 1..100
#     if num %3 == 0 
#        puts "dog"
#     else 
#     puts num 
# end