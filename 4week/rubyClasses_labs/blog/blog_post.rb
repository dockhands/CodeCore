# Model a blog post and comments with classes and make it so a blog have many comments.

# Add the ability for me to add and remove comments from a blog.
# require './blog_and_comment.rb'
# require './comment.rb'

class BlogPost

    attr_accessor :blog_name, :comments

    def initialize (blog_name)
        @blog_name = blog_name
        @comments = []
    end 


    def add (comment)
     @comments << comment
    end 

    def remove (comment)
    @comments.delete(comment)
    end 
       
    

end 

# puts my_movies_blog = BlogPost.new("Movies")
