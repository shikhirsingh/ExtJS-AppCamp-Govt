# App Camp - LAB 6

In this lab, we will connect the sidebar with Main 


## Step 1: Create new views 

* Unzip [this zip file](main.zip) and place it's contents in the appcamp/app/view folder. Your folder structure should look like this after moving files :
```
appcamp/
├── app/
    ├── view/
        ├── agencies/
        ├── dashboard/
        ├── main/
        ├── spendingdetail/
├── app.js
...
├── resources/
├── sass/
```

## Step 2: Setup ViewModel and ViewController for MenuView

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

* Uncomment all comments from app/view/main/MainViewController.js 
* Change the function onMenuViewSelection in the MainViewController.js to add new parameters: tree and node
```
	onMenuViewSelectionChange: function (tree, node) {
```


* Visit [http://localhost:1841](http://localhost:1841/appcamp/) 

# Files

Your files should look like this at then end of this lab

<a href="app/"> Files</a>