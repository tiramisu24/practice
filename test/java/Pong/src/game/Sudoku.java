package game;
import java.awt.*;        // Uses AWT's Layout Managers
import java.awt.event.*;  // Uses AWT's Event Handlers
import javax.swing.*; 

public class Sudoku extends JFrame{
	public static final int GRID_SIZE =9;
	public static final int SUBGRID_SIZE = 3;
	
    public static final int CELL_SIZE = 60;   // Cell width/height in pixels
    public static final int CANVAS_WIDTH  = CELL_SIZE * GRID_SIZE;
    public static final int CANVAS_HEIGHT = CELL_SIZE * GRID_SIZE;
    
    public static final Color Open_Cell_BGCOLOR = Color.YELLOW;
    public static final Color OPEN_CELL_TEXT_YES = new Color(0, 255, 0);  // RGB
    public static final Color OPEN_CELL_TEXT_NO = Color.RED;
    public static final Color CLOSED_CELL_BGCOLOR = new Color(240, 240, 240); // RGB
    public static final Color CLOSED_CELL_TEXT = Color.BLACK;
    public static final Font FONT_NUMBERS = new Font("Monospaced", Font.BOLD, 20);
    
	public Sudoku(){
		
	}
}
