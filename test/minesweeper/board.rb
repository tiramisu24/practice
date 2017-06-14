require_relative 'tile'
class Board
  attr_accessor :board
  def initialize(size = 3, num_bombs = 2)
    @board = create_board(size, num_bombs)
    render
  end

  def create_board(size, num_bombs)
    board = Array.new(size) {Array.new(size)}
    board.each_with_index do |row, i|
      row.each_with_index do |box, j|
        board[i][j] = Tile.new(self,[i,j])
      end
    end

    i = 0
    while(i<num_bombs) do
      x = rand(0...size)
      y = rand(0...size)
      if !board[x][y].is_bomb
        board[x][y].set_bomb
        i +=1
      end
    end
    board
  end

  def length
    @board.length
  end

  def getTile(x,y)

    @board[x][y]
  end
  def flag_tile(pos)
    tile = @board[pos[0]][pos[1]]
    tile.flag
    render
  end

  def flip_tile(pos)
    tile = @board[pos[0]][pos[1]]

    tile.explore

    render
    tile.is_bomb ? true : false
  end

  def won
    @board.flatten.all?{|tile| tile.is_bomb != tile.is_explored}
  end

  def render
    @board.each do |row|
      row.each do |tile|
        print tile.render
      end
      print "\n"
    end
  end

end
