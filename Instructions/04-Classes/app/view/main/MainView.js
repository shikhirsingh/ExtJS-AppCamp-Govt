Ext.define('AppCamp.view.main.MainView',{
	extend: 'Ext.Container',
	xtype: 'mainview', // we are giving our own symbolic name to this class
	layout: 'hbox',
	cls: 'mainview', // this is a css class name for this class
	requires: [  // similar to #include
        'AppCamp.view.main.SideBarView',
        'AppCamp.view.main.HeaderView',
        'AppCamp.view.main.CenterView',
        'AppCamp.view.main.FooterView',
        'AppCamp.view.main.DetailView'
    ],
	//reference: 'mainview',   // TO BE DEFINED LATER
	//controller: 'mainview',
	//viewModel: 'mainview',

  items: [
		{
			xtype: 'sidebarview',
			width: 225
		},
		{
			xtype: 'container',
			flex: 1,
			layout: 'vbox',
			items: [
				{
					xtype: 'headerview',
					height: 50,
					docked: 'top'
				},
				{
					xtype: 'container',
					flex: 1,
					layout: 'hbox',
					items: [
						{
							xtype: 'centerview',
							flex: 1
						},
						{
							xtype: 'detailview',
							width: 70
						}
					]
				},
				{
					xtype: 'footerview',
					height: 30,
					docked: 'bottom'
				}
			]
		}
	]
});
