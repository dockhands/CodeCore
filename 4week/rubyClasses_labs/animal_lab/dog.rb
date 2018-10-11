require './animal.rb'

class Dog < Animal

def bark
    "woof"
end 

def eat 
    super  
    puts "Bones are yummuy!"
end 

end 