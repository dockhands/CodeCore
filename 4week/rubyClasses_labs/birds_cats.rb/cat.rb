require './animal.rb'
require './helper_methods.rb'


class Cat < Animal
# attr_accessor :random_number
include HelperMethods

def catch(bird)
# try = rand(10)
# puts "random number is " 


    if random_num >= 5 
        puts random_num
        puts "Awesome, #{name} caught #{bird.name}"
        true 
    else 
        puts random_num
        puts "darn missed the bird"
    end 
end 


end 
