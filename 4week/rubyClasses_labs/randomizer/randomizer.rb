# Build a class that takes in an array of names and a number of teams with one public method “randomize” that will assign different names to a team. The teams will be called: team1, team2..etc.

# require './test.rb'

class Randomizer
    
    attr_accessor :name_array, :number_of_teams

    def initialize (name_array, number_of_teams)
        @name_array = name_array
        @number_of_teams = number_of_teams
    end 

    def randomize 
      
        puts name_array
        teams_array = [] 
       
        for i in 1..number_of_teams
        
            teams_array << "team_#{i}" 
            
        end 
       puts teams_array
        # number_of_teams.each {|num| p num}
        iterateNum = teams_array.length
        puts name_array.length
        for i in 1...name_array.length 

            for x in 0...teams_array.length

            teams_array[x] << name_array[0] 
            
            if i+iterateNum > name_array.length 
                break 
            else 
            teams_array[x] << name_array[i+iterateNum] 

            end 

           
            end
            # teams_array[1] << name_array[i] 
        end 
        puts teams_array
    end 

end 