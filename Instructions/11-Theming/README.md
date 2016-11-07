# App Camp - LAB 11 - Theming

In this lab, theme our project

## Step 1: Create a new theme

* We need to create a new theme package. Run the following command in /appcamp/ folder

```
sencha generate theme --extend theme-triton MyTheme
```

* The command above will has created a new theme package located at SenchaTraining/packages/local/MyTheme
* Edit line 48 in SenchaTraining/packages/local/MyTheme/package.json to say modern instead of classic
* Create a new file SenchaTraining/packages/local/MyTheme/sass/var/Component.scss, with the following contents

 ```
$base-color: #0b2431;
 ```
* In command prompt under the directory SenchaTraining/packages/local/MyTheme, type in the following
```
sencha build package
```

# Step 2: Change appcamp project to refer to theme

* Edit appcamp/app.json, change the property of "theme" to "MyTheme" (around like #55)
* Edit appcamp/sass/src/view/main/SideBarView.scss and set background to $base-color. Your file should look like this:
```
.sidebarview { 
	transition: width .08s;
	color: white;
	background: $base-color; 
}
```
* Edit appcamp/sass/src/view/main/FooterView.scss to set background to $base-color. The FooterView.scss file should look like this:
```
.footerview { border: 0; background: $base-color; color:white}
.footercomment { font-weight:bold;float:right;padding-top:7px;padding-right:10px;color:white;}
```

* Save all files and revisit the site [http://localhost:1841/appcamp](http://localhost:1841/appcamp/) in Google Chrome. Click on the Spending Detail