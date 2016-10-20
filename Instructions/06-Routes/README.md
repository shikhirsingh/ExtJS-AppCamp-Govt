# App Camp - LAB 6

In this lab, we will setup routues so that the Center view can be changed with the sidebar 


## Step 1: Create new views 

* Unzip [this zip file](view.zip) and place it's contents in the appcamp/app/view folder. Your folder structure should look like this after moving files :
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

## Step 2: Setup Routes

* In SenchaTraining/app/Application.js, uncomment the "requires" and store properties
* Remove any duplicate "requires" property if it is present. You should have only one requires array.
* Uncomment all comments from app/view/main/MainViewController.js 
* Change the function onMenuViewSelection in the MainViewController.js to add new parameters: tree and node
```
	onMenuViewSelectionChange: function (tree, node) {
```

# Files

Your files should look like this at then end of this lab

<a href="app/"> Files</a>