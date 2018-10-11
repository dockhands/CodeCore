students = []

loop do 
print "I'll need a name "
name= gets.chomp



print "I'll need a phone number "
phone_number= gets.chomp 
if name == 'exit'
    puts students
    break 


else 
    student = { 
    name: name,
    phone_number: phone_number
}
students << student 
end 

end 





