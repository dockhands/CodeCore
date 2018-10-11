questions = ["What is your name", "How are you?", "Is that right?", "Are you John?", "How is everything?"]

long_questions = []

for each_q in questions  
    
    if each_q.length > 15 
        long_questions << each_q
    else
       
    end 

  
end
puts long_questions


puts questions.select { |each_q|  each_q.length > 15   } 
