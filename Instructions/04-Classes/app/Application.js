Ext.define('AppCamp.Application', {
	extend: 'Ext.app.Application',
	name: 'AppCamp',
  requires: ['AppCamp.view.main.MainView'],   // the sub-namespace correspond to directory names you just created. "requires" are like #include in C++


  launch: function () {
			Ext.Viewport.add({ xtype: 'mainview' }); // we are now adding another view class
	},

  onAppUpdate: function () {
  			Ext.Msg.confirm('Application Update', 'This application has an update, reload?',
  					function (choice) {
  							if (choice === 'yes') {
  									window.location.reload();
  							}
  					}
  			);
  }
});
