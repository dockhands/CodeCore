require './animal.rb'
require './bird.rb'
require './cat.rb'

p sly = Cat.new("Sly")
p tweetie = Cat.new("Tweetie the Bird")

sly.catch(tweetie)

def simulation 
    caught_number =0
    p sly = Cat.new("Sly")
    p tweetie = Cat.new("Tweetie the Bird")

    for num in 1..100 do 
        # sly.catch(tweetie)
    
        if   sly.catch(tweetie) == true 
            caught_number +=1
    
        end 
        puts "caught the bird a #{caught_number} times! "
    end 

end 



simulation 

