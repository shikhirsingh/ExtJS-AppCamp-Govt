Ext.define('AppCamp.view.main.MenuView',{
    extend: 'Ext.list.Tree',
    xtype: 'menuview',
    reference: 'menuview',
    cls: 'menuview',
    requires: [
       // 'AppCamp.view.main.MenuViewModel',
        'Ext.data.TreeStore'
    ],

	ui: 'navigation',
	expanderFirst: false,
	expanderOnly: false
    /*
    listeners: {
		//selectionchange: 'onMenuViewSelectionChange'
	},

    viewModel: {
        type: 'main-menuview'
    },

    bind: {
        store: '{sidemenu}'
    }
    */
});
