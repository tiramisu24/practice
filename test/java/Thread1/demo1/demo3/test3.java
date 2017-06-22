package demo3;

import java.util.Scanner;

class Runner extends Thread{
	private boolean running = true;
	@Override
	public void run() {
		while(running){
			System.out.println("lkj");
			try {
				Thread.sleep(100);
			} catch (InterruptedException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		}
		
	}
	public void shutdown(){
		running = false;
	}
	
}

public class test3 {
	public static void main(String[] args){
		Runner r1 = new Runner();
		r1.start();	
		
		Scanner scanner = new Scanner(System.in);
		scanner.nextLine();
		r1.shutdown();
	}

	

}
