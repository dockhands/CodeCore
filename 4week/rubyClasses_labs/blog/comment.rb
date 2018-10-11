
# Model a blog post and comments with classes and make it so a blog have many comments.

# Add the ability for me to add and remove comments from a blog.

# require './blog_post.rb'
# require './blog_and_comment.rb'


class Comment 

    attr_accessor :blog_name, :text

    def initialize (blog_name,text)
        @blog_name = blog_name
        @text = text 
    end 


end 


