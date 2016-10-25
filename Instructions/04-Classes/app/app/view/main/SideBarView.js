Ext.define('AppCamp.view.main.SideBarView',{
	extend: 'Ext.Container',
	xtype: 'sidebarview',
    reference: 'sidebarview',
	cls: 'sidebarview', // css class defined in /appcamp/scss/src/view/main/SideBarView.scss
	layout: 'vbox',

    // ** Commented out - to be used later
    requires: [
      'AppCamp.view.main.WelcomeView',
      'AppCamp.view.main.MenuView',
      'AppCamp.view.main.ActionView'
    ],
    
	scrollable: true,
	items: [
		{ xtype: 'welcomeview', height: 100 },
		{ xtype: 'menuview', flex: 1 },
		{ xtype: 'actionview', height: 30 }
	]
});
