require_relative 'tile'
class Board

  def initialize(size = 3, num_bombs = 2)
    @board = create_board(size, num_bombs)
  end

  def create_board(size, num_bombs)
    board = Array.new(size) {Array.new(size)}
    board.each_with_index do |row, i|
      row.each_with_index do |box, j|
        board[i][j] = Tile.new([i,j],self)
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

  def render

    @board.each do |row|
      row.each do |tile|
        print tile.render
      end
      print "\n"
    end
  end

end
