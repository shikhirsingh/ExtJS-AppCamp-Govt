# App Camp - LAB 2

In this lab, we will create an empty Ext JS project

## Step 1: Generate an empty project

In this step, we will generate an empty app so that we can being the new project. We will need to do this in the SenchaTraining folder:

``` 
sencha -sdk ext/ generate app -starter=false -modern ITdashboard itdashboard
```


## Step 2: Start the Sencha Web Server with Hot Reload

In a separate Command Prompt or Terminal window run the following command in the SenchaTraining/itdashboard folder:

```
sencha app watch
```

If your web-server starts correctly, you should see this:
```
$ sencha app watch
Sencha Cmd v6.2.0.103
[INF] Processing Build Descriptor : default
[INF] Starting server on port : 1841
[INF] Mapping http://localhost:1841/~cmd to /Users/shikhir/bin/Sencha/Cmd/6.2.0.103...
[INF] Mapping http://localhost:1841/ to /Users/shikhir/SenchaTraining...
[INF] Server started at port : 1841
[INF] Application available at http://localhost:1841
[INF] Loading app json manifest...
[INF] Appending content to /Users/shikhir/SenchaTraining/itdashboard/bootstrap.js
[INF] Writing content to /Users/shikhir/SenchaTraining/itdashboard/bootstrap.json
[INF] merging 375 input resources into /Users/shikhir/SenchaTraining/build/development/ITdashboard/resources
[INF] merged 1 resources into /Users/shikhir/SenchaTraining/build/development/ITdashboard/resources
[INF] merging 17 input resources into /Users/shikhir/SenchaTraining/build/development/ITdashboard
[INF] merged 1 resources into /Users/shikhir/SenchaTraining/build/development/ITdashboard
[INF] Writing content to /Users/shikhir/SenchaTraining/itdashboard/sass/example/bootstrap.json
[INF] Writing content to /Users/shikhir/SenchaTraining/itdashboard/sass/example/bootstrap.js
[INF] writing sass content to /Users/shikhir/SenchaTraining/build/temp/development/ITdashboard/sass/ITdashboard-all.scss.tmp
[INF] appending sass content to /Users/shikhir/SenchaTraining/build/temp/development/ITdashboard/sass/ITdashboard-all.scss.tmp
[INF] appending sass content to /Users/shikhir/SenchaTraining/build/temp/development/ITdashboard/sass/ITdashboard-all.scss.tmp
[INF] Writing content to /Users/shikhir/SenchaTraining/build/development/ITdashboard/app.json
[LOG] Building /Users/shikhir/SenchaTraining/build/temp/development/ITdashboard/sass/ITdashboard-all.scss
Exiting with code 0
[INF] Appending content to /Users/shikhir/SenchaTraining/itdashboard/bootstrap.js
[INF] Writing content to /Users/shikhir/SenchaTraining/itdashboard/bootstrap.json
[INF] Waiting for changes...
```

We will need to keep this Command Prompt or Terminal window open for the rest of the App Camp. Minimize this window and don't close it for the remainder of the AppCamp

## Step 3: Test your App

* Visit [http://localhost:1841](http://localhost:1841/itdashboard/)

You should see the following:

<img src="hello-extjs.jpg" align="center" />

