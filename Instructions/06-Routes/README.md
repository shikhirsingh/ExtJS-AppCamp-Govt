# App Camp - LAB 6

In this lab, we will setup routues so that the Center view can be changed with the sidebar 


## Step 1: Create new views 

* Unzip [this zip file](https://github.com/shikhirsingh/ExtJS-AppCamp-Govt/raw/master/Instructions/06-Routes/view.zip) and place it's contents in the appcamp/app/view folder. Your folder structure should look like this after moving files :
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
* Take a look at each of the new files, notice how they contain a View, ViewModel, and ViewController 

## Step 2: Setup Routes

* In SenchaTraining/app/Application.js, uncomment the "requires" and store properties
* Remove any duplicate "requires" property if it is present. You should have only one requires array.
* Uncomment all comments from app/view/main/MainViewController.js 
* Delete the line alert(node.get('xtype'));  located in the onMenuViewSelectionChange method of the MainViewController.js file
* Save both files and revisit the site [http://localhost:1841/appcamp](http://localhost:1841/appcamp/) in Google Chrome.
* Now visit the site [http://localhost:1841/appcamp/#agenciesview](http://localhost:1841/appcamp/#agenciesview) in Google Chrome. 
* Notice how the agencies tab is loaded upon launch of webapp

Troubleshooting: If you are getting an error, please stop sencha app watch (Ctrl+C). Run the command 'sencha app build development' and re-run the command 'sencha app watch'.


# Files

Your files should look like this at then end of this lab

<a href="app/"> Files</a>