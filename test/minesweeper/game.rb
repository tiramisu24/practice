require_relative "board.rb"

class Game
  def initialize(size = 3, num_bombs = 2)
    @board = Board.new(size, num_bombs)
    @lost = false
    play
  end


  def play
    until @board.won || @lost
      puts "Enter pos and action as action,x,y. F for flag, O for flip"
      moves = gets.chomp.split(",")
      next if(moves.length !=3)
      play_move(moves[0], [moves[1].to_i, moves[2].to_i])
      @board.render
    end

  end

  def play_move(move, pos)
    move = move.upcase()
    if(move.upcase() == "F")
      @board.flag_tile(pos)
    elsif(move.upcase() == "O")
      if (@board.flip_tile(pos))
        @lost = true
        puts "You stepped on a bomb"
      end
    end
  end



end


puts "enter board size"
size = gets.chomp.to_i
puts "enter number of bombs"
num_bombs = gets.chomp.to_i
g = Game.new(size, num_bombs)
