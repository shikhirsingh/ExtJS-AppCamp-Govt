Ext.define('AppCamp.view.main.MenuView',{
	extend: 'Ext.list.Tree',
	xtype: 'menuview',
	reference: 'menuview',
	cls: 'menuview',
	requires: [
		'Ext.data.TreeStore'
	],
	
	ui: 'navigation',
	expanderFirst: false,
	expanderOnly: false,

    html: 'menuview',
    listeners: {
		// selectionchange: 'onMenuViewSelectionChange'
	}
});
