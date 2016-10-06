Ext.define('AppCamp.view.main.MenuViewModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.main-menuview',
    requires: 'AppCamp.store.MenuStore',
    stores: {
        sidemenu: {
            type: 'menustore'
        }
    }
});