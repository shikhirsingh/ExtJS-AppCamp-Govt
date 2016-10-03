Ext.application({
    name: 'AppCamp',

    launch: function () {
        Ext.Viewport.add(
    			{
    				xtype: 'container',
    				id: 'root',
    				// layout: 'vbox',
    				items: [
    					{
    						xtype: 'container',
    						html: 'A red Container',
    						// flex:1,
                style: 'background-color: red; color: white',
    						title: "red",

    					},
    					{
    						xtype: 'container',
    						html: 'A green Container',
                // flex: 1,
    						style: 'background: green; color:white'
    					},
    					{
    						xtype: 'container',
    						html: 'A Purple Container',
    						// flex: 1,
                style: 'background: purple; color: white'
    					}

    				]
    			}
    		);

    }
});
