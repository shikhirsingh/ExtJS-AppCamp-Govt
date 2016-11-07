# App Camp - LAB 10 - Dashboard

In this lab, we will work with DataView components

## Step 1: Create a new Store for Agency Summary Data

* Create a new file called appcamp/app/store/AgencySummaryStore.js with the following contents

```
Ext.define('AppCamp.store.AgencySummaryStore', {
    extend: 'Ext.data.Store',
    storeId: 'AgencySummaryStore',
    alias: 'store.agencysummarystore',
    autoLoad: true,
    model: 'Ext.data.Model',
    proxy: {
		type: 'ajax',
		reader: {
			type: 'json',
			rootProperty: 'result'
		},
		url: 'resources/data/agenciesAllData.json'
	}
});
```

## Create a Dashboard


* Replace the app/view/dashboard/Dashboard.js file with the following content

```
Ext.define('AppCamp.view.dashboard.DashboardView',{
	extend: 'Ext.Container',
	requires: [
		'AppCamp.view.dashboard.DashboardViewController',
		'AppCamp.view.dashboard.DashboardViewModel'
	],	
	xtype: 'dashboardview',
	controller: 'dashboardview',
	viewModel: 'dashboardview',
	layout: 'fit',
	items: [
		{
			xtype: 'dataview',
			margin: 10,
			shadow: true,
			scrollable: 'vertical',
			inline: true,
			selectedCls: 'dataview-selected',
			itemTpl: [
				'<div class="dataview">',
					'<img class="dataview-image" src="resources/images/logos/{agencyCode}.svg" />',
					'<div class="dataview-text">',
						'<div>{agencyAbbreviation}&nbsp;({agencyCode})</div>',
						'<div>{agencyName}</div>',
						'<div>{[Ext.util.Format.currency(values.totalITspendingCYB,"$",2)]}</div>',
					'</div>',
				'</div>'
			],
			bind: {
				store: '{agencies}'
			}
		}
	]
});
```

* Add add the new store we created to DashboardViewModel. Replace the DashboardViewModel.js with the following content
```
Ext.define('AppCamp.view.dashboard.DashboardViewModel', {
	extend: 'Ext.app.ViewModel',
	alias: 'viewmodel.dashboardview',
	requires: ['AppCamp.store.AgencySummaryStore'],
    stores: {
        agencies: {
            type: 'agencysummarystore'
        }
    }	
});

```

* Save all files and revisit the site [http://localhost:1841/appcamp](http://localhost:1841/appcamp/) in Google Chrome. Does it look hidious?

## Let's fix the SASS

* Replace the content of appcamp/sass/src/view/dashboard/DashboardView.scss
```
.dataview {
	-webkit-box-shadow: 0px 5px 10px -6px black;
	-moz-box-shadow: 0px 5px 10px -6px black;
	box-shadow: 0px 5px 10px -6px black;
	padding: 10px 10px 20px 10px;
	border-radius: 20px;
	margin: 10px;
	height: 180px;
	width: 180px;
	background-color: #e3ebec;
	cursor: pointer;
}
.dataview-selected {
	background-color:gray;
}
.dataview-image {
	height:100px;width:100px;display:block;margin-left:auto;margin-right:auto;
}
.dataview-text {
	text-align:center;margin-top:10px;font-size:12px;
}
```

* Save all files but do not reload the site. Did your browser automatically reload the SASS files.
Troubleshooting: Ctrl + C the terminal running sencha app watch and type in "sencha app build development". Then restart "sencha app watch"