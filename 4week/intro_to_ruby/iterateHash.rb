my_hash = { "BC " => ["Victoria", "Richmond"], "Alberta" => ["Edmonton", "Calgary", "Compton"]}

my_hash.each do |key, value|
puts " #{key}'s cities are : #{value.join(", ")}"

end 



brands = { 
sony: ["walkmen", "discplayer", "speakers"],
apple: ["iphone", "pizza gum", "ipod"],
boss: "speakers"

}

brands.each do |key, value|
    puts " #{key} makes: #{value.join(", ")}"
    
    end 
    

    