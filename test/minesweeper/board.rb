require_relative 'tile'
class Board

  def initialize(size = 3, num_bombs = 2)
    @board = create_board(size, num_bombs)
  end

  def create_board(size, num_bombs)
    board = Array.new(size) {Array.new(size)}
    board.each_with_index do |row, i|
      row.each_with_index do |box, j|
        box = Tile.new([i,j],self)
      end
    end

    i = 0
    while(i<num_bombs) do
      x = rand(0..size)
      y = rand(0..size)
      if !board[x][y].is_bomb
        board[x][x].set_bomb
        i +=1 
      end
    end

    board
  end

end
