# Write a method factorial that takes one argument and returns the factorial value of that number. In math, factorial for a number n is the product of the numbers from 1 to the number n. For instance, factorial for 5 will be: 5 * 4 * 3 * 2 * 1.


array1 = [1, 2, 3, 4, 4, 4, 2, 3, 3, 3]
def factorial (number)

    counter = number 
    result = 1 
    loop do 
        
    if counter ==1 
    break
        
    else 
        result = counter * result
        counter -=1
    end 
   
end 
result 
end 


puts factorial(7)
