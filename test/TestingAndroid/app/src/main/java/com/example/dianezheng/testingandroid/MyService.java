package com.example.dianezheng.testingandroid;

/**
 * Created by dianezheng on 6/10/17.
 */


        import android.app.Service;
        import android.content.Intent;
        import android.media.MediaPlayer;
        import android.os.IBinder;
        import android.util.Log;
        import android.widget.Toast;
public class MyService extends Service {
    MediaPlayer myPlayer;
    @Override
    public IBinder onBind(Intent intent) {
        return null;
    }
    @Override
    public void onCreate() {
        Toast.makeText(this, "Service Created", Toast.LENGTH_LONG).show();
        Log.d("start", "in myService");
        myPlayer = MediaPlayer.create(this, R.raw.mozart);
        myPlayer.setLooping(false); // Set looping
    }
    @Override
    public void onStart(Intent intent, int startid) {
        Toast.makeText(this, "Service Started", Toast.LENGTH_LONG).show();
        myPlayer.start();
    }
    @Override
    public void onDestroy() {
        Toast.makeText(this, "Service Stopped", Toast.LENGTH_LONG).show();
        myPlayer.stop();
    }
}