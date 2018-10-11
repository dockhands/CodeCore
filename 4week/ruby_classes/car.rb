class Car 

    attr_accessor :model, :type, :capacity 

def initialize (model, type, capacity)
@model, @type, @capacity = model, type, capacity 
end 




def drive

   puts ignite_engine
   ' Lets go for a ride!'
end 

def stop

    'scrreeech stopping!'
end 

def park
   'aaaah parked'
end 

def self.max_speed

    200 
end 



private 

def pump_gas
   'mmmm filling up gas'
end 

def ignite_engine
 'vrrrrrrm engine starting'
end 

end 
