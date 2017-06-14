

class Tile
  DIRS = [
    [-1, -1],
    [-1,  0],
    [-1,  1],
    [ 0, -1],
    [ 0,  1],
    [ 1, -1],
    [ 1,  0],
    [ 1,  1]
  ]
  attr_reader :pos
  def initialize(board, pos, is_bomb = false)
    @board = board
    @pos = pos
    @is_flagged = false
    @is_explored = false
    @is_bomb = is_bomb

  end
  def is_bomb
    @is_bomb
  end

  def is_flag
    @is_flagged
  end

  def is_explored
    @is_explored
  end

  def hit_bomb
    @is_explored && @is_bomb
  end

  def set_bomb
    @is_bomb = true
  end

  def flag
    @is_flagged = true
  end

  def explore
    @is_explored = true
  end

  def adjacent_bomb_count

    count = 0
    DIRS.each do |dir|
      x = @pos[0] + dir[0]
      y = @pos[1] + dir[1]

      next if(x<0 || x >=@board.length || y <0 || y >=@board.length)
      if @board.getTile(x,y).is_bomb
        count +=1
      end
    end
    count
  end

  def render
    if is_flag
      "F"
    elsif hit_bomb
      "X"
    elsif is_explored
      adjacent_bomb_count == 0 ? "_" : adjacent_bomb_count.to_s

    else
      "*"
    end

  end

end
