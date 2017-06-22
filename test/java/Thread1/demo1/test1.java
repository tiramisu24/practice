class ThreadDemo1 extends Thread{
	
	public void run(){
		for(int i =0; i<10; i++){
			System.out.println(i);
			try {
				Thread.sleep(100);
			} catch (InterruptedException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
			
		}
	}
}
public class test1 {
	public static void main(String[] args){
		 ThreadDemo1 td1 = new ThreadDemo1();
		 td1.start();
		 ThreadDemo1 td2 = new ThreadDemo1();
		 td2.start();
	}
}
