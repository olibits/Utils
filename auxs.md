# Auxs

## Services

### User files

 - 1 - images
 - 4 - cv in pdf

## Android

### Temp ward

```Java

    ob_te_et_E04.setThreshold(0);
    ob_te_et_E04.setAdapter(jobsByLevelAdapter);
    ob_te_et_E04.setOnTouchListener(new View.OnTouchListener() {
        @Override
        public boolean onTouch(View v, MotionEvent event) {

            if (ob_te_et_E04.getText().toString().equals("")){
                ob_te_et_E04.showDropDown();
            }
            return false;
        }
    });


```

### Switcher wacher state

```Java

    // Start Switch listener //

        int state = ob_ay_sw_gender.getState();

        ob_ay_sw_gender.addSwitchObserver(new RMTristateSwitch.RMTristateSwitchObserver() {
            @Override
            public void onCheckStateChange(RMTristateSwitch switchView, int state) {
                ob_ay_tv_gender.setText(
                        state == RMTristateSwitch.STATE_LEFT ? appTextsActivity.getP02() :
                                state == RMTristateSwitch.STATE_MIDDLE ? "Sin especificar" :
                                        appTextsActivity.getP03());
            }
        });

    // End Switch listener //

```

### EditText Spinner dropdown 

```Java

    // Start Countries AutoCompleteTextView Activity //

        final ArrayAdapter<String> adapter = new ArrayAdapter<String>(this,
                android.R.layout.simple_dropdown_item_1line, countriesList);

        //ob_ay_et_P07.showDropDown();

        ob_ay_et_P07.setThreshold(0);

        ob_ay_et_P07.setAdapter(adapter);

        ob_ay_et_P07.setOnTouchListener(new View.OnTouchListener() {
            @Override
            public boolean onTouch(View v, MotionEvent event) {

                if (ob_ay_et_P07.getText().toString().equals("")){

                    ob_ay_et_P07.showDropDown();
                }

                return false;
            }
        });

    // End Countries AutoCompleteTextView Activity //

```