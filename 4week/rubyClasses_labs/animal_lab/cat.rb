require './animal.rb'

class Cat < Animal



def bark
    "woof"
end 

def eat 
    super  
    puts "Fish is yummy!"
end 

end 