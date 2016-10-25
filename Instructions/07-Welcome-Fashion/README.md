# App Camp - LAB 6

In this lab, we will populate the welcome panel  


## Step 1: Create a ViewModel for the MainView 

* Create a directory appcamp/resources/images/
* Copy [this file](BarackObama.jpeg) into the newly create folder appcamp/resources/images
* Next, we will create a new file called MainViewModel.js located in appcamp/app/view/main with the following content
```
Ext.define('AppCamp.view.main.MainViewModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.main-mainview',
	data: {
		agency: 'Executive Office',
		firstName: 'Barak',
		lastName: 'Obama',
        profile: 'resources/images/BarackObama.jpeg'
	}
});
```
* Add a new requires value for the newly created MainViewModel in the last step in the MainView.js file. 
* We will need to tell the MainView.js that there is a new View Model associated with this view. Add the following code to MainView.js, after the requires property (although it could be placed anywhere)
```
    viewModel: {
        type: 'main-mainview'
    },	
```


## Step 2: Change WelcomeView

* Remove all the content from WelcomeView.js and replace it with this:
```
Ext.define('AppCamp.view.main.WelcomeView',{
	extend: 'Ext.Component',
	xtype: 'welcomeview',
	cls: 'welcome',
	bind: { data: { firstname: '{firstName}', lastname: '{lastName}', profile: '{profile}'} },
	tpl: '<div class="profile">' +
			'	<div class="profile_pic">' +
			'		<img src="{profile}" alt="..." class="img-circle profile_img">' +
			'	</div>' +
			'	<div class="profile_info">' +
			'		<span>Welcome,</span>' +
			'		<h2>{firstname} {lastname}</h2>' +
			'	</div>' +
			'</div>'
});
```
* Save all three files and revisit the site [http://localhost:1841/appcamp](http://localhost:1841/appcamp/) in Google Chrome.

## Step 3: Turn of Sencha Fashion!

* Edit appcamp/app.json and look for the "development" property (it's around line number 327)
* Add  the following property in the development object: "tags": ["fashion"]      
* Your "development" object will look like this:

```
    "development": {
        "watch": {
            "delay": 250
        },
        "tags": [
            "fashion"
        ]        
    },
```

* Stop (Ctrl + C) and then restart your sencha app watch command in the terminal window
* Save all three files and revisit the site [http://localhost:1841/appcamp](http://localhost:1841/appcamp/) in Google Chrome.
* Now, make changes to the resources/src/main/SideBarView.scss file to change the background color to "red" and then save the SCSS file.
* Notice how your browser updated without a refresh. 
* Change the color back in SideBarView.scss and notice the automatically reverts back