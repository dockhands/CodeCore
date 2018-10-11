
# Write some code that keeps asking the user for book names until the user enters "exit". After typing "exit" the program should display all the entered book names sorted and have the book names capitalized.

books = []
book_title = []

loop do 

    puts "give me a number or type 'exit' to end"
    book = gets.chomp

    break if book == 'exit'
    
    book_title << book.split(" ")

   
    puts book_title

    books << book.capitalize 

end 
p books.sort

