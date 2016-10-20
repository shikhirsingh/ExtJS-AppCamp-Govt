# App Camp - LAB 5

In this lab, we will get the sidebar tree panel working. 


## Step 1: Setup the JSON data files

* Create a new file called menu.json located in appcamp/resources/view/data. Copy and paste the contents from [here](https://raw.githubusercontent.com/shikhirsingh/ExtJS-AppCamp-Govt/master/Instructions/05-VM-Listeners-Bind/menu.json). 

```
appcamp/
├── app/
├── app.js
...
├── resources/
    ├── data/
        ├── menu.json
├── sass/
```

## Step 2: Setup ViewModel for MenuView and ViewController for MainView

* Uncomment all comments in the appcamp/view/main/MenuView.js
* Be sure the line that contains the property "expanderOnly" ends with a comma
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

    onMenuViewSelectionChange: function (tree, node) {
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
		url: 'resources/data/menu.json',
		reader: {
			type: 'json',
            rootProperty: 'root.children'
		}
	}
});
```
* Visit [http://localhost:1841/appcamp](http://localhost:1841/appcamp/) 

# Files

Your files should look like this at then end of this lab

<a href="app/"> Files</a>