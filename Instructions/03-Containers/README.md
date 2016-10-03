# App Camp - LAB 3

In this lab, we will create a common application layout template


## Step 1: Update app.js and Application.js

* Let's edit app.js and replace it's entire content with the following


```
Ext.application({
	name: 'AppCamp',
	extend: 'AppCamp.Application'
});
```

* create directory called app in the appcamp directory
* In the newly created appcamp/app directory, create a file called Application.js and paste the following into it's contents

```
Ext.define('AppCamp.Application', {
	extend: 'Ext.app.Application',
	name: 'AppCamp',

	launch: function () {
		Ext.Viewport.add(
			{
				xtype: 'container',
				layout: 'hbox',
				items: [
					{
						xtype: 'container', 
						html: 'sidebarview',
						width: 225,
						style: { 'color': 'white', 'background': 'linear-gradient(to bottom right, #000 0%, #3f729b 100%)'} 
					},
					{
						xtype: 'container', 
						flex: 1, 
						layout: 'hbox',
						items: [
							{
								xtype: 'toolbar', 
								title: 'headerview',
								docked: 'top', 
								height: 50,
								style: { 'color': 'black', 'box-shadow': '0 0 10px rgba(51, 51, 51, 0.4)', 'background': '#EDEDED' } 
							},
							{
								xtype: 'navigationview', 
								html: 'centerview',
								flex: 1, 
								navigationBar: false, 
								style: { 'background': '#f1f5f6' } 
							},
							{
								xtype: 'container',
								html: 'detailview',
								width: 70,
								hidden: false,
								style: { 'background': '#EDEDED'} 
							},
							{ 
								xtype: 'toolbar',
								html: 'footerview',
								height: 30,
								docked: 'bottom', 
								style: { 'color': 'white', 'background': 'linear-gradient(to right, #3f729b 0%, #000 100%)' } 
							}
						]
					}
				]
			}
		);
	},

	onAppUpdate: function () {
			Ext.Msg.confirm('Application Update', 'This application has an update, reload?',
					function (choice) {
							if (choice === 'yes') {
									window.location.reload();
							}
					}
			);
	}
});
```


## Step 3: Test your App

* Visit [http://localhost:1841](http://localhost:1841/appcamp/)

You should see the following:

<img src="hello-extjs.jpg" align="center" />