# App Camp - LAB 8 - Grid

In this lab, we will create learn how to create a Pivot Grid

## Step 1: Update app.json

* In app.json, around line 67 look for the requires array. Add "pivot" to the requires array. After adding, your requires array will look like this:

```
    "requires": [
        "font-awesome",
        "pivot"
    ],
```

## Step 2: Add pivot grid


* Replace the AgencyView.js file with the following content

```
Ext.define('AppCamp.view.agencies.AgenciesView',{
	extend: 'Ext.Container',
	xtype: 'agenciesview',
	controller: 'agenciesview',
	viewModel: 'agenciesview',
	requires: ['Ext.pivot.Grid'],
	layout: 'vbox',

	items: [
		{
			xtype: 'selectfield',
			reference: 'reportsselectfield',
			margin: 10,
		 	usePicker: false,
			defaultTabletPickerConfig : {
				width : 400
			},
			label: 'Report:', 
			listeners: {
				change: 'onReportsViewSelectfieldChange'
			}
		},
		{
			xtype: 'pivotgrid',
			reference: 'reportspivotgrid',
			margin: 10,
			shadow: true,
			flex: 1,
			matrix: {
				type: 'local',
				store: 'AgencyPortfolioStore'
			}
		}
	]
});
```

* Replace the AgenciesViewModel with the following content
```
Ext.define('AppCamp.view.agencies.AgenciesViewController', {
	extend: 'Ext.app.ViewController',
	alias: 'controller.agenciesview',
	
	init: function() {
		var refs = this.getReferences();
		this.reportsselectfield = refs.reportsselectfield;
		this.reportspivotgrid = refs.reportspivotgrid;

		this.reportsselectfield.setOptions([
			{ value: 'r0', text: 'Select a Report...' }, 
			{ value: 'r1', text: 'Total IT Spending By Agency' }, 
			{ value: 'r2', text: 'Total IT Spending By Type of Investment' },
			{ value: 'r3', text: 'Agency Spending By IT Portfolio' },
			{ value: 'r4', text: 'Agency Spending By Type of Investment' },
			{ value: 'r5', text: 'Total IT Spending By Primary Service Area' },
			{ value: 'r6', text: 'Agency Spending By Bureau' }
		]);
	},

	onReportsViewSelectfieldChange: function(selectfield, newValue, oldValue, eOpts) {
		var reportspivotgrid = this.reportspivotgrid;
		var value = newValue.data.value;
		switch(value) {
			case 'r0':
				reportspivotgrid.reconfigurePivot({
					colGrandTotalsPosition: 'none',
					topAxis: [],
					leftAxis: [],
					aggregate: []
				});
				break;
			case 'r1':
				reportspivotgrid.reconfigurePivot({
					colGrandTotalsPosition: 'last',
					topAxis: [],
					leftAxis: [{ dataIndex: 'agencyName', header: 'Agency', width: 375 }],
					aggregate: [{ dataIndex: 'totalITspendingCYB', header: 'Total IT spending', width: 200, align: 'right', renderer: function(v) {return Ext.util.Format.currency(v,'$',2)} }]
				});
				break;
			case 'r2':
				reportspivotgrid.reconfigurePivot({
					colGrandTotalsPosition: 'last',
					topAxis: [],
					leftAxis: [{ dataIndex: 'typeOfInvestment', header: 'Type Of Investment', width: 375 }],
					aggregate: [{ dataIndex: 'totalITspendingCYB', header: 'Total IT spending', width: 200, align: 'right', renderer: function(v) {return Ext.util.Format.currency(v,'$',2)} }]
				});
				break;
			case 'r3':
				reportspivotgrid.reconfigurePivot({
					colGrandTotalsPosition: 'last',
					topAxis: [{ dataIndex:  'partOfITPortfolio' }],
					leftAxis: [{ dataIndex: 'agencyName', locked : true, header: 'Agency', id: 'agency', width: 375 }],
					aggregate: [{ dataIndex: 'totalITspendingCYB', header: 'Total IT spending', width: 200, align: 'right', renderer: function(v) {return Ext.util.Format.currency(v,'$',2)} }]
				});
				break;
			case 'r4':
				reportspivotgrid.reconfigurePivot({
					colGrandTotalsPosition: 'last',
					topAxis: [{ dataIndex:  'typeOfInvestment' }],
					leftAxis: [{ dataIndex: 'agencyName', locked : true, header: 'Agency', id: 'agency', width: 375 }],
					aggregate: [{ dataIndex: 'totalITspendingCYB', header: 'Total IT spending', width: 200, align: 'right', renderer: function(v) {
						if (v == undefined) {
							return '-';
						}
						else {
							return Ext.util.Format.currency(v,'$',2)} 
						}
					}]
				});
				break;
			case 'r5':
				reportspivotgrid.reconfigurePivot({
					colGrandTotalsPosition: 'last',
					topAxis: [],
					leftAxis: [{ dataIndex: 'feaBRMservicesPrimaryServiceArea', locked : true, header: 'Primary Service Area', width: 400 }],
					aggregate: [{ dataIndex: 'totalITspendingCYB', header: 'Total IT spending', width: 200, align: 'right', renderer: function(v) {return Ext.util.Format.currency(v,'$',2)} }]
				});
				break;
			case 'r6':
				reportspivotgrid.reconfigurePivot({
					colGrandTotalsPosition: 'last',
					topAxis: [{ dataIndex:  'agencyName' }],
					leftAxis: [{ dataIndex: 'bureauName', header: 'Bureau', width: 375 }],
					aggregate: [{ dataIndex: 'totalITspendingCYB', header: 'Total IT spending', width: 200, align: 'right', renderer: function(v) {return Ext.util.Format.currency(v,'$',2)} }]
				});
				break;
			default:
				break;
		}
	}

});
```

* Save all files and revisit the site [http://localhost:1841/appcamp](http://localhost:1841/appcamp/) in Google Chrome. Click on the Agency
