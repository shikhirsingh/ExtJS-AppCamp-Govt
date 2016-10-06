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