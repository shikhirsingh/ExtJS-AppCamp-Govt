Ext.define('AppCamp.view.main.SideBarView',{
	extend: 'Ext.Container',
	xtype: 'sidebarview',
	reference: 'sidebarview',
	requires: [
    	'AppCamp.view.main.WelcomeView',
        'AppCamp.view.main.MenuView',
        'AppCamp.view.main.ActionView'
    ],

	cls: 'sidebarview',
	layout: 'vbox',
	scrollable: true,
	items: [
		{ xtype: 'welcomeview', height: 100 },
		{ xtype: 'menuview', flex: 1},
		{ xtype: 'actionview', height: 30 }
	]
});