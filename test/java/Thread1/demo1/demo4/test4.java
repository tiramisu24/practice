package demo4;
class Runnable extends Thread{
	
	@Override
	public void run() {
		for(int i =0; i<10000;i++){
			test4.increment();
		}
	}
	
}

public class test4 {
	private static Object lock1 = new Object();
	public static int count =0;
	public static void main(String[] args){
		test4 t = new test4();
		t.doWork();
	}
	public static void increment(){
		synchronized(lock1){
			test4.count++;

		}
	}
	public void doWork(){
		Runnable r1 = new Runnable();
		Runnable r2 = new Runnable();
		
		r1.start();
		r2.start();
		
		try {
			r1.join();
			r2.join();
		} catch (InterruptedException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		System.out.println("Count is: " + count);
		
	}
}
