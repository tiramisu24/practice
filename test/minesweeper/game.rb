require_relative "board.rb"

class Game
  def initialize(size = 3, num_bombs = 2)
    @board = Board.new(size, num_bombs)
  end


  def play
    until @board.win
      

    end

  end



end


puts "enter board size"
size = gets.chomp.to_i
puts "enter number of bombs"
num_bombs = gets.chomp.to_i
g = Game.new(size, num_bombs)
