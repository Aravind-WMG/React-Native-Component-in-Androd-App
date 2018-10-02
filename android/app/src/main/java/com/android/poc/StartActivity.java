package com.android.poc;

import android.content.Intent;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;

public class StartActivity extends AppCompatActivity  {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.start_activity);
        Button button = (Button)findViewById(R.id.button2);
        Button buttonAN=  (Button)findViewById(R.id.buttonAN);

        button.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                Intent i = new Intent(StartActivity.this,MainActivity.class);
                i.putExtra("type","ANRN");
                startActivity(i);
            }
        });
        buttonAN.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                Intent i = new Intent(StartActivity.this,MainActivity.class);
                i.putExtra("type","AN");
                startActivity(i);
            }
        });
    }
}
