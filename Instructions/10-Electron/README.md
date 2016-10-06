# App Camp - LAB Electron

In this lab, we will package your application into an Electron container 

## Step 1: Build the App into electron directory 

* Type in to following command in your appcamp directory
```
sencha app build -des electron/app
```

Your directory structure should now look like this
```
appcamp/
├── app/
├── app.js
...
├── electron/
├── resources/
├── sass/
```

## Step 2: Creating a manifest file 

* If you are on macOS or linux and have NOT installed wine, please download this [package.json](https://gist.github.com/shikhirsingh/a2bd9116b0c2418d065f3519592692a6) file into appcamp/electron directory
* Otherwise, please download this [package.json](https://gist.github.com/shikhirsingh/ae86d4b8c1735cf9cd19e23130612044) file and put into the appcamp/electron directory

## Step 3: Creating a Main Process file
* Copy the [main.js](https://gist.github.com/shikhirsingh/c690c39a690f63b69ab70a8b1f95bd78) file and place it into the appcamp/electron/app directory

## Step 4: Installing Electron into your project

* Run the following command in the appcamp/electron directory from command prompt or terminal window 
```
npm install electron-prebuilt -save
```

## Step 5: Installing Electron Packager into your project

* Run the following command in the appcamp/electron directory
```
npm install electron-packager --save-dev
```

## Step 6: Running your Ext JS app inside Electron for the first time

* Run the following command 
```
npm start
```

## Step 7: Packaging for Release

* Once you are done progamming your application, you can create a production release build with the following command
```
npm run-script package
```
* After a few minutes, your release binaries will be available in the earthquakes/electron/dist directory

## Step 8: Share your binaries
* macOS builds are known as Darwin. Run your release build by double clicking on them
* Impress your friends - show them the app you build in this AppCamp by sharing the binary files!

## Reference
* My blog on [Electron](https://www.sencha.com/blog/creating-installable-desktop-applications-with-ext-js-and-electron/) and Ext JS
* [Electron's homepage](http://electron.atom.io/)
* A [good book](https://www.manning.com/books/cross-platform-desktop-applications) on Electron