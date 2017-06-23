package game;

public class Room {
	private static String[] types= {"Lobby", "Garden", "Kitchen", "Room"};
	private String roomType;
	public Room(){
		this.roomType = types[(int)(Math.random()*(types.length-1) +1)];
	}
	public Room(boolean lobby){
		this.roomType = types[0];
	}
	public void printGreeting(){
		System.out.println("You are in a "+ this.roomType);
	}
}
