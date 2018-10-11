# def multiply(*args)
#     # if the user enters no argument then args -> []
#     # if the user enters 2 arguments ( 7, 6) then args -> [6, 7]
#     result = 1
#     args.each do |num|
#       result *= num if num.is_a? Numeric
#     end
#     result
#   end


def maxNumber(*number) 

    max = 0
    number.each do |num| 
        
        if num > max
            max = num 
        end 
  
    end 
    max
end 


puts maxNumber(3,2,920,209,23)