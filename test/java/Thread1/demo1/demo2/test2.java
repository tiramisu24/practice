package demo2;


class ThreadDemo1 implements Runnable{

	@Override
	public void run() {
		for(int i =0; i<10; i++){
			System.out.println(i);
			try {
				Thread.sleep(100);
			} catch (InterruptedException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
			
		}// TODO Auto-generated method stub
		
	}
	
}

public class test2 {
	public static void main(String[] args){
		 Thread td1 = new Thread(new ThreadDemo1());
		 td1.start();
		 
		 Thread td2 = new Thread(new ThreadDemo1());
		 td2.start();
	}
}
