# App Camp - LAB 8 - Grid

In this lab, we will create a data grid and learn about Models

## Step 1: Setup the JSON data files

* Download the zip file called [agency-data.zip](agency-data.zip), unzip it contents(two files) and place it them into the resources/data directory. Your folder structure will look like this:

```
appcamp/
├── app/
├── app.js
...
├── resources/
    ├── data/
        ├── menu.json
        ├── agencyportfolio.json
        ├── agencyAllData.json		
├── sass/
```

## Step 2: Create a store for AgencyPortfolio.json

* We need a store for our new data file. Create a new file called appcamp/app/store/AgencyPortfolioStore.js copy the following contents into it:

```
Ext.define('AppCamp.store.AgencyPortfolioStore', {
	extend: 'Ext.data.Store',
	storeId: 'AgencyPortfolioStore',
	alias: 'store.agencyportfoliostore',
	autoLoad: true,
	model: 'AppCamp.model.AgencyPortfolioModel',
	proxy: {
		type: 'ajax',
		url: 'resources/data/agencyportfolio.json',
		reader: {
			type: 'json',
			rootProperty: 'result'
		}
	}
});
```

* We need a model for the store. Create a file called AgencyPortfolioModel.js in a new directory appcamp/app/model
* Place the following contents in the new model file 
```
Ext.define('AppCamp.model.AgencyPortfolioModel', {
	extend: 'Ext.data.Model',
	fields: [
		{ name: 'agency', type: 'string',
			convert: function(v, record){
				return record.get('agencyCode') + '-' + record.get('agencyName');
			}
		},
		{ name: 'totalITspendingCY', type: 'number' }, 
		{ name: 'totalITspendingCYB', type: 'number',
			convert: function(v, record){
				return record.get('totalITspendingCY') * 1000000;
			}
		},
		{ name: 'DME_CY_AgencyFunding', type: 'number' }, 
		{ name: 'DME_CYB_AgencyFunding', type: 'number',
			convert: function(v, record){
				return record.get('DME_CY_AgencyFunding') * 1000000;
			}
		},
		{ name: 'DME_CY_Contributions', type: 'number' }, 
		{ name: 'OM_CY_AgencyFunding', type: 'number' }, 
		{ name: 'OM_CY_Contributions', type: 'number' }, 
		{ name: 'numberOfGovFTEsCY', type: 'number' }, 
		{ name: 'percentageCostForGovFTECY', type: 'number' }, 
		{ name: 'providesCloudToAgencyComponents', type: 'number' }, 
		{ name: 'providesCloudToOtherFedStateLocal', type: 'number' }, 
		{ name: 'Provisioned_DME_CY_AgencyFunding', type: 'number' }, 
		{ name: 'Provisioned_DME_CY_Contributions', type: 'number' }, 
		{ name: 'Provisioned_OM_CY_AgencyFunding', type: 'number' }, 
		{ name: 'Provisioned_OM_CY_Contributions', type: 'number' }
	]
});
``` 

## Step 3: Let's update the SpendingDetailView

* Change the contents of appcamp/app/view/spendingdetail/SpendingDetailView.js with the following

```
Ext.define('AppCamp.view.spendingdetail.SpendingDetailView',{
    extend: 'Ext.Container',
	requires: [
		'AppCamp.view.spendingdetail.SpendingDetailViewController',
		'AppCamp.view.spendingdetail.SpendingDetailViewModel',
		'Ext.grid.Grid',
		'Ext.layout.Fit'
	],
    xtype: 'spendingdetailview',
    layout: 'fit',
    controller: 'spendingdetailview',
    viewModel: 'spendingdetailview',    
    items: [
        {
            xtype: 'grid',
            bind: {
                store: '{agencyportfolio}'
            },
            columns: [
                { dataIndex: 'agencyCode', text: 'agencyCode', width: 300 },
                { dataIndex: 'agencyName', text: 'agencyName', type: 'string', width: 300 },
                { dataIndex: 'uniqueInvestmentIdentifier', text: 'uniqueInvestmentIdentifier', type: 'string', width: 300 },
                { dataIndex: 'bureauCode', text: 'bureauCode', type: 'string', width: 300 },
                { dataIndex: 'bureauName', text: 'bureauName', type: 'string', width: 300 },
                { dataIndex: 'partOfITPortfolio', text: 'partOfITPortfolio', type: 'string', width: 300 },
                { dataIndex: 'typeOfInvestment', text: 'typeOfInvestment', type: 'string', width: 300 },
                { dataIndex: 'lineItemDescriptor', text: 'lineItemDescriptor', type: 'string', width: 300 },
                { dataIndex: 'investmentTitle', text: 'investmentTitle', type: 'string', width: 300 },
                { dataIndex: 'investmentDescription', text: 'investmentDescription', width: 300 },
                { dataIndex: 'feaBRMservicesPrimaryServiceArea', text: 'feaBRMservicesPrimaryServiceArea', type: 'string', width: 300 },
                { dataIndex: 'totalITspendingCYB',text: 'totalITspendingCYB', width: 200, 
                    align: 'right', renderer: function(v) {
                        return Ext.util.Format.currency(v,'$',2)
                    }
                }
            ]
        }
    ]
});
```

* Change the SpendingDetailViewModel to contain the following
```
Ext.define('AppCamp.view.spendingdetail.SpendingDetailViewModel', {
	extend: 'Ext.app.ViewModel',
	requires: ['AppCamp.store.AgencyPortfolioStore'],
	alias: 'viewmodel.spendingdetailview',
		
	data: {
			name: 'AppCamp'
	},
    stores: {
        agencyportfolio: {
            type: 'agencyportfoliostore'
        }
    }
});
```

* Save all files and revisit the site [http://localhost:1841/appcamp](http://localhost:1841/appcamp/) in Google Chrome. Click on the Spending Detail
