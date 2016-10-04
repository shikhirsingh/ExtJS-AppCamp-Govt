Ext.define('AppCamp.view.main.MainViewController', {
	extend: 'Ext.app.ViewController',
	alias: 'controller.mainview',

	init: function() {
		var refs = this.getReferences();
		this.sidebarview = refs.sidebarview;
		this.welcomeview = refs.welcomeview;
		this.menuview = refs.menuview;
		this.headerview = refs.headerview;
		this.centerview = refs.centerview;
		this.detailview = refs.detailview;
		this.footerview = refs.footerview;
	},

	onMenuViewSelectionChange: function (tree, node) {
		alert(node.get('xtype'));
	}

});
