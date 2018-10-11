# Next Module
# Build a class called FizzBuzz that takes two numbers as parameters and then have a method called run that returns a fizzbuzz array (numbers from 1 to 100, numbers divisible by the first number replaced by 'fizz' and numbers divisible by the second number replaced by 'buzz' and numbers divisible by both replaced by 'fizzbuzz'). For instance this code should work with your class:

# fb = FizzBuzz.new(3,5)
# fb.run # returns an array like: [1, 2, 'fizz', 4, 'buzz, ...

class FizzBuzz


    attr_accessor :num1, :num2

    def initialize (num1, num2)
    @num1, @num2 = num1, num2
    end 
    
def run 

    fizzBuzzArray = []
    
    for num in 1..100
        
        if num %num1 == 0 && num %num2 == 0
        fizzBuzzArray.push("FizzBuzz")
            
        elsif num %num1 == 0 
            fizzBuzzArray.push("Fizz")
        elsif num %num2 == 0
            fizzBuzzArray.push("Buzz")
        else  
            fizzBuzzArray.push(num)
        end
    end 
    puts fizzBuzzArray


end 




end 