# App Camp - LAB 5

In this lab, we will get the sidebar tree panel working. 


## Step 1: Setup the JSON data files

* Unzip [this zip file](app.zip) and place it's contents in the appcamp/resources/ folder. Your folder structure should look like this after moving files :
```
appcamp/
├── app/
├── app.js
...
├── resources/
    ├── app/
        ├── view/
            ├── calendars/
            ├── data/
            ├── images/
            ├── logos/
            ├── users/
├── sass/
```

## Step 2: Setup ViewModel for MenuView and ViewController for MainView

* Uncomment all lines in the MenuView.js
* Add a comma for the expanderOnly property
* Create a ViewModel file appcamp/view/main/MenuViewModel.js with the following content
```
Ext.define('AppCamp.view.main.MenuViewModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.main-menuview',
    requires: 'AppCamp.store.MenuStore',
    stores: {
        sidemenu: {
            type: 'menustore'
        }
    }
});
```

* Uncomment all comments from appcamp/view/main/MenuView.js
* Be sure the line that contains the property "expanderOnly" ends with a comma
* Create a the file app/view/main/MainViewController.js with the following content
```
Ext.define('AppCamp.view.main.MainViewController', {
	extend: 'Ext.app.ViewController',
	alias: 'controller.mainview',
	//routes: { ':xtype': 'Route' },

	init: function() {
		var refs = this.getReferences();
		this.sidebarview = refs.sidebarview;
		this.welcomeview = refs.welcomeview;
		this.menuview = refs.menuview;
		this.headerview = refs.headerview;
		this.centerview = refs.centerview;
		this.detailview = refs.detailview;
		this.footerview = refs.footerview;
        //this.redirectTo( location.hash.slice(1), true );

	},
/*
	Route:function(xtype) {
		var node=Ext.data.StoreManager.get('menustore').findNode('xtype', xtype);
		item = this.centerview.child('component[xtype=' + xtype + ']');
		if (!item) {
				try {
					item = this.centerview.add({ xtype: xtype });
				}
				catch(ex) {
					alert(ex);
				}
		}
		this.menuview.setSelection(node);
		this.centerview.setActiveItem(xtype);
	},
*/

	onMenuViewSelectionChange: function () {
		alert(node.get('xtype'));
        /*
		if (node.get('xtype') != undefined) {
			this.redirectTo( node.get('xtype') );
		}
        */

	}

});
```
* Uncomment all comments from appcamp/app/view/main/MainView.js
* Create a directory called store inside of the app directory. Your directory structure should look like this
```
appcamp/
├── app/
	├── store/
    ├── view/
├── app.js
...
├── resources/
├── sass/
```

* Create a new file in appcamp/app/store directory create a file called MenuStore.js with the following content:
```
Ext.define('AppCamp.store.MenuStore', {
	extend: 'Ext.data.TreeStore',
	storeId: 'menustore',
    alias: 'store.menustore',
	autoLoad: true,
	model: 'Ext.data.TreeModel',
	proxy: {
		type: 'ajax',
		url: 'resources/app/data/menu.json',
		reader: {
			type: 'json',
            rootProperty: 'root.children'
		}
	}
});
```
* Visit [http://localhost:1841](http://localhost:1841/appcamp/) 

# Files

Your files should look like this at then end of this lab

<a href="app/"> Files</a>