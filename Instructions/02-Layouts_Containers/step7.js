/*
 * This file is generated and updated by Sencha Cmd. You can edit this file as
 * needed for your application.
 */
Ext.application({
    name: 'AppCamp',

    launch: function () {
		Ext.Viewport.add(
			{
				xtype: 'container',
				id: 'root',
				layout: 'hbox',
				items: [
					{
						xtype: 'container', 
						html: 'A red Container',
						flex: 1,						
                        style: 'background-color: red; color: white'

					},
					{
						xtype: 'container', 
						html: 'A green Container',
                        //flex: 1,
						width: '100px',
						style: 'background: green; color:white'
					},
					{
						xtype: 'container', 
						html: 'A Purple Container',
						flex: 1,
						style: 'background: purple; color: white'
					}					
					
				]
			}
		);
    }
});
