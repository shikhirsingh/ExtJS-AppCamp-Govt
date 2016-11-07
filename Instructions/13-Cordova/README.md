# App Camp - LAB Cordova

In this lab, we will package your application using the Cordova packager for Android 

## Step 1: Initialize Cordova 

* Type in to following command in your appcamp directory
```
sencha cordova init com.mycompany.AppCamp AppCamp
```

Your directory structure should now look like this
```
appcamp/
├── app/
├── app.js
...
├── cordova/
├── resources/
├── sass/
```

## Step 2: Pick your platform 

* The command in step one has added content to the appcamp/app.json file. Edit the appcamp/app.json file and choose the android platform (around line 9). You will need to delete ios and uncommment the line. After doing this, make sure your platform property looks like this:
```
    "builds": {
        "web": {"default": true},
        "native": {
            "packager": "cordova",
            "cordova" : {
                "config": {
                    // Uncomment the line below and add the platforms you wish to build for
                    "platforms": "android", 

                    "id": "com.mycompany.HelloCordova",
                    "name": "HelloCordova"
                }
            }
        }
    },
```

## Step 3: Build debug build
* Run the following command to do a debug build in the appcamp folder
```
sencha app build native
```
* Your debug build will be available at the following location: appcamp/cordova/platforms/android/build/outputs/apk/android-debug.apk

## Step 4: Fill out survey

* [App Camp Survey](https://www.surveymonkey.com/r/SeattleAppCamp)

## Reference
* [Sencha Cordova Docs](https://docs.sencha.com/cmd/guides/cordova_phonegap.html) 
* [Cordova Plugins](https://cordova.apache.org/plugins/)
* [Android Fragmentation Report](http://opensignal.com/reports/2015/08/android-fragmentation/)
* [Sencha Samsung App](https://github.com/mgusmano/SamsungSencha) which demonstrates figure print reader
