string = "abcd".chars
newArray = []


# for char in 0..string.length-2
#     puts string[char] + " " + " " + string[char+1]
# end 

for char in 0..string.length-2
    newArray << string[char] + string[char+1]
end 

print newArray 