require './blog_post.rb'
require './comment.rb'

my_movies_blog = BlogPost.new("Movies")
hater_post = Comment.new("Movies", "Your blog sucks")
avg_post = Comment.new("Movies", "Your blog is OK")
fan_post = Comment.new("Movies", "Your blog is the best")


# puts "added comments #{my_movies_blog.add(hater_post)}"
# puts "added comments #{my_movies_blog.add(hater_post)}"
my_movies_blog.add(hater_post)
my_movies_blog.add(avg_post)
my_movies_blog.add(fan_post)

puts my_movies_blog.blog_name


my_movies_blog.remove(hater_post)

my_movies_blog.comments.each {|string| p string.text}

puts "dog"