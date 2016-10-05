Ext.define('AppCamp.view.main.MainViewController', {
	extend: 'Ext.app.ViewController',
	alias: 'controller.mainview',
	routes: { ':xtype': 'Route' },

	init: function() {

		var refs = this.getReferences();
		this.sidebarview = refs.sidebarview;
		this.welcomeview = refs.welcomeview;
		this.menuview = refs.menuview;
		this.headerview = refs.headerview;
		this.centerview = refs.centerview;
		this.detailview = refs.detailview;
		this.footerview = refs.footerview;

		//this.menuview.setStore(Ext.data.StoreManager.get('menustore'));
		
        this.redirectTo( location.hash.slice(1), true );
	},

	Route:function(xtype) {
		//var node = this.menuview.getStore().findNode('xtype', xtype);
		var node=Ext.data.StoreManager.get('menustore').findNode('xtype', xtype);
		var item = this.centerview.child('component[xtype=' + xtype + ']');
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


	onMenuViewSelectionChange: function (tree, node) {
		//alert(node.get('xtype'));
        
		if (node.get('xtype') != undefined) {
			this.redirectTo( node.get('xtype') );
		}

	}

});
