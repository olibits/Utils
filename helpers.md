# Helpers

## Fragments of code

### Enable Back Home Button in Android

```Java
    void SetActionBarSettings(){
        getSupportActionBar().setDisplayHomeAsUpEnabled(true);
    }
```

### Code Base for Activities in Android

```Java
    public class MainActivity extends AppCompatActivity {

        //Here

        @Override
        protected void onCreate(Bundle savedInstanceState) {
            CalligraphyConfig.initDefault(new CalligraphyConfig.Builder()
                    .setDefaultFontPath("fonts/SourceCodePro-Regular.ttf")
                    .setFontAttrId(R.attr.fontPath)
                    .build()
            );
            Logger.addLogAdapter(new AndroidLogAdapter());//Only in the Initial Activity;
            super.onCreate(savedInstanceState);
            setContentView(R.layout.activity_main);
            Logger.i("MainActivity");

            //Here
        }

        //Here

        @Override
        protected void attachBaseContext(Context newBase) {
            super.attachBaseContext(CalligraphyContextWrapper.wrap(newBase));
        }
    }
```
### Guidelines for a Constraint Layout

```XML
    <android.support.constraint.Guideline
        android:id="@+id/gl_v_000"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:orientation="vertical"
        app:layout_constraintGuide_percent="0.0" />

    <android.support.constraint.Guideline
        android:id="@+id/gl_v_010"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:orientation="vertical"
        app:layout_constraintGuide_percent="0.1" />

    <android.support.constraint.Guideline
        android:id="@+id/gl_v_025"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:orientation="vertical"
        app:layout_constraintGuide_percent="0.25" />

    <android.support.constraint.Guideline
        android:id="@+id/gl_v_050"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:orientation="vertical"
        app:layout_constraintGuide_percent="0.5" />

    <android.support.constraint.Guideline
        android:id="@+id/gl_v_075"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:orientation="vertical"
        app:layout_constraintGuide_percent="0.75" />

    <android.support.constraint.Guideline
        android:id="@+id/gl_v_090"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:orientation="vertical"
        app:layout_constraintGuide_percent="0.9" />

    <android.support.constraint.Guideline
        android:id="@+id/gl_v_100"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:orientation="vertical"
        app:layout_constraintGuide_percent="1.0" />

    <android.support.constraint.Guideline
        android:id="@+id/gl_h_000"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:orientation="horizontal"
        app:layout_constraintGuide_percent="0.0" />

    <android.support.constraint.Guideline
        android:id="@+id/gl_h_005"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:orientation="horizontal"
        app:layout_constraintGuide_percent="0.05" />

    <android.support.constraint.Guideline
        android:id="@+id/gl_h_025"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:orientation="horizontal"
        app:layout_constraintGuide_percent="0.25" />

    <android.support.constraint.Guideline
        android:id="@+id/gl_h_050"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:orientation="horizontal"
        app:layout_constraintGuide_percent="0.5" />

    <android.support.constraint.Guideline
        android:id="@+id/gl_h_075"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:orientation="horizontal"
        app:layout_constraintGuide_percent="0.75" />

    <android.support.constraint.Guideline
        android:id="@+id/gl_h_095"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:orientation="horizontal"
        app:layout_constraintGuide_percent="0.95" />

    <android.support.constraint.Guideline
        android:id="@+id/gl_h_100"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:orientation="horizontal"
        app:layout_constraintGuide_percent="1.0" />
```