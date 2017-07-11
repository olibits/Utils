# Helpers

<!-- MarkdownTOC -->

- Comments
    - XML / Gradle
    - Java
    - Comment in line \(Android Studio\)
- Fragments of code
    - Validate if a EditText is empty
    - Disabe autofocus in forms when new Activity is calling
    - User JSON Response Login
    - Basic structure for a TextWatcher
    - Validate mail in a EditText
    - Template for AppCompactActivity
    - Switch for cases in calls with Retrofit
    - Use Synchronized call with Retrofit
    - Set Title in a ActionBarActivity
    - Set BackParent Button un a ActionBar
    - Use ConstraintLayout in a ScrollView
    - Rules for a ConstraintLayout

<!-- /MarkdownTOC -->

## Comments

### XML / Gradle

```XML

    <!-- Start Seccion -->



    <!-- End Seccion -->


    <!-- InLine Comment-->

```

### Java

```Java

    // Start Seccion //



    // End Seccion //


    // InLine Comment //

```

### Comment in line (Android Studio)

```Velocity

    $project.name - $file.fileName
    Create by IRR - Yooin.me on $today

    [date]
    - ...

    ...
    - ...

```

## Fragments of code

### Validate if a EditText is empty

```Java

    if (somethinString.matches("")){
        somethinEditText.setError("Something text);
        return;
    }

```

### Disabe autofocus in forms when new Activity is calling

```Java

    this.getWindow().setSoftInputMode(WindowManager.LayoutParams.SOFT_INPUT_STATE_ALWAYS_HIDDEN);

```

### User JSON Response Login

```JSON

    {
        "access_token": "jnQB1pgqgiXb9TlHD6qyAejHnuIGat--hCOCPRoZo-YGg6HZ0_lpYEvx9M0qQySL3PrXV7hhV1Oi1y0v03rUFv6wUHr2eO3nI5I4Qy1wh6hAAprpa9lkAXd2u4cO9wDLMaQU5vrY9RvOPZOgWvPj3heWSDiNsH9F2J4rPtXJLSl0srEu88GH8Z7SqrFseX5az-LEN974K7q-qXp8QvnOQq1OYTa0UGwXr2f1xasffUhgg6TV1bgph2aImta-tAqsJhwAbA8sxv_t_hvXrwaQKQXGUkRQ5p-tVPdCvJ0Yv9p3vduGMCrff_FqU6Pq_5quw_aoQSmvTO-iTC08PLV_QMQVL-9-FJihZbagmKn1lTblgmO7N4DeMzjcCBrOHBLmOICz2oNuWvJW7LYj0i4Qq-KMrG4pKNSkk-dFR4Zjutbv3Mqn4MHEZTi1heSQUaEYkNzhefXCSfCCzYyqn_uGO-F9vz9cq1rGcEpQJzsybrQ",
        "token_type": "bearer",
        "expires_in": 3599,
        "refresh_token": "4iSyR3HQfDMcxe-g3DYYBD3-IPmKApRhuHV4Jmm2WWcIuArk1VrBkMy3DOIsHUznG9XTDwo9o1AaxtA2Q99GG4Vv4Ja9LfaqUEZVh6SOjCA5kB-uMHL98DeV4RZjkLo4g42HLgVxQyOf-I6tSEoxn0MBRKd0bLCOdLUBxj3ZZa5Ds50xySfzMAGF3jnJob-nGtYNxETn_MLAJVGWnJ6g5KpQy40Sp5ufkM4a4NTGvsySm9eaTSNIQzEltnVxk6ZNjHrbeKM8iUJp3RzvVkG2_Y5fA33L8RdztXp-uDzgXQ48l0Bw5atqnw7CzVsMtnDGVTgvt0-hJCbix2wW4tFEdEwN5i571hnGZ6DfGBG2h0zSOBQhQE1TA80eSJFhKmTITPA9imMSkv5Jhnc_crkdBFaoLpHc4Ms-Vpfd_Am5ZlNT63aJSu0IHHYW6yLx-bDJfiNNjCN35Qa_xBANyskyvuTGzashzypkfx_IUpsJvG4",
        ".issued": "Tue, 27 Jun 2017 12:51:35 GMT",
        ".expires": "Tue, 27 Jun 2017 13:51:35 GMT"
    }

```

### Basic structure for a TextWatcher

```Java

    [EditText].addTextChangedListener(new TextWatcher() {
        @Override
        public void beforeTextChanged(CharSequence s, int start, int count, int after) {

        }

        @Override
        public void onTextChanged(CharSequence s, int start, int before, int count) {

        }

        @Override
        public void afterTextChanged(Editable s) {

        }
    });

```

### Validate mail in a EditText

```Java

    public final static boolean isValidEmail(CharSequence target)
    {
        if (TextUtils.isEmpty(target))
        {
            return false;
        } else {
            return android.util.Patterns.EMAIL_ADDRESS.matcher(target).matches();
        }
    }

```

### Template for AppCompactActivity

```Java

    @Override
    protected void onCreate(Bundle savedInstanceState) {

        AppTextsActivity appTextsActivity = new AppTextsActivity();

        try {
            appTextsActivity.AppTextsConnect();

        } catch (IOException e) {
            e.printStackTrace();
        }

        // Start Calligraphy constructor //

        CalligraphyConfig.initDefault(new CalligraphyConfig.Builder()
            .setDefaultFontPath("fonts/Lato-Regular.ttf")
            .setFontAttrId(R.attr.fontPath)
            .build()
        );

        // End Calligraphy constructor //

        super.onCreate(savedInstanceState);
        setContentView(R.layout.[Acticity]);

        }

    // Start Calligraphy activity //

    @Override
    protected void attachBaseContext(Context newBase) {
        super.attachBaseContext(CalligraphyContextWrapper.wrap(newBase));
    }

    // End Calligraphy activity //

```

### Switch for cases in calls with Retrofit

```Java

    switch (response.code()){
        case 200:
            Logger.d("200");
            TastyToast.makeText(getApplicationContext(), "200", TastyToast.LENGTH_LONG, TastyToast.SUCCESS);
            break;

        case 400:
            Logger.w("400");
            TastyToast.makeText(getApplicationContext(), "400", TastyToast.LENGTH_LONG, TastyToast.ERROR);
            break;

        case 401:
            Logger.w("401");
            TastyToast.makeText(getApplicationContext(), "401", TastyToast.LENGTH_LONG, TastyToast.ERROR);
            break;

        case 404:
            Logger.w("404");
            TastyToast.makeText(getApplicationContext(), "404", TastyToast.LENGTH_LONG, TastyToast.ERROR);
            break;


        case 500:
            Logger.e("500");
            TastyToast.makeText(getApplicationContext(), "500", TastyToast.LENGTH_LONG, TastyToast.ERROR);
            break;

        default:
            Logger.w("Error : %s", response.code());
            TastyToast.makeText(getApplicationContext(), "Unknow Error", TastyToast.LENGTH_LONG, TastyToast.ERROR);
            break;

        // onFailure //

        Logger.e("Error", t.getMessage());
        Logger.e(t, "Learn something error");
        TastyToast.makeText(getApplicationContext(), "Peticion Error", TastyToast.LENGTH_LONG, TastyToast.ERROR);
    }

```

### Use Synchronized call with Retrofit

```Java

    StrictMode.ThreadPolicy policy = new StrictMode.ThreadPolicy.Builder().permitAll().build();

    StrictMode.setThreadPolicy(policy);

```

### Set Title in a ActionBarActivity

```Java

    // super.onCreate(savedInstanceState); //
    getSupportActionBar().setTitle([Title]);

```

### Set BackParent Button un a ActionBar

```Java

    // super.onCreate(savedInstanceState); //
    // getSupportActionBar().setTitle([Title]); //
    getSupportActionBar().setDisplayHomeAsUpEnabled(true);

```

### Use ConstraintLayout in a ScrollView

```XML

    <ScrollView xmlns:android="http://schemas.android.com/apk/res/android"
        xmlns:tools="http://schemas.android.com/tools"
        android:layout_width="match_parent"
        android:layout_height="match_parent"
        xmlns:app="http://schemas.android.com/apk/res-auto"
        android:fillViewport="true">
    </ScrollView>

```

### Rules for a ConstraintLayout

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