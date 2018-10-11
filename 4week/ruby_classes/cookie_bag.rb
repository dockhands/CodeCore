class CookieBag

def initialize(capacity = 3)
    @capacity = capacity 
    @cookies = []

end 

def add(cookie)
    @cookies << cookie 
end 

def remove(cookie)
    @cookies.pop
end 

def show_details
    @cookies.each do |c|
        puts c.details 
    end 
end 


end 