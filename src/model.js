const strModel = `{
	"model": {
		"claims": {
			"stat": "A",
			"address": "5805 North Lamar, Bldg. G-Annex MSC0213",
			"isDBAdmin": "false",
			"access_code": "1588280480415yHRYyWgxkb",
			"idp_id": "NIEF:IDP:TXDPSI",
			"family_name": "Brown",
			"email": "paul.brown@dps.texas.gov",
			"expire_when": "Thu Apr 30 2020 21:06:20 GMT+0000 (UTC)"
		},
		"user": {
			"props": {
				"id": 1052,
				"email": "paul.brown@dps.texas.gov",
				"fname": "Paul",
				"lname": "Brown",
				"mname": "W",
				"nickname": null,
				"job_title_id": 23,
				"cell_phone": "5129249624",
				"business_phone": "5124247691",
				"supervisor_email": "michael.lucero@dps.texas.gov",
				"supervisor_fname": "Michael",
				"supervisor_lname": "Lucero"
			}
		},
		"modules": {
			"Tech": {
				"states": {
          "Support": 1,
          "view": {
            "title": "My tech support",
            "stateColumn": "status"
          },
          "edit": {
            "hello": "edit me",
            "previousStates": [1]
          },
          "new": {
            "hello": "world"
          } 
				}
      },
      "agency": {
				"workspace": {
					"title": "Agencies",
					"api": "/agency",
					"apiObj": "agencies",
					"views": [{
						"id": "default",
						"name": "Default",
						"sort": [{
							"id": "name"
						}]
					},
					{
						"id": "latest",
						"name": "Recently Updated",
						"sort": [{
							"id": "edit_when",
							"desc": true
						}]
					}],
					"addButton": {
						"text": "New Agency",
						"action": "/dynamicform/agency/edit",
						"state": "edit"
					},
					"table": {
						"api": "agency",
						"filterable": true,
						"showPaginationTop": true,
						"defaultFilterColumns": ["id"],
						"columns": [{
							"Header": "Action",
							"type": "stateChange",
							"label": "Choose Action",
							"filterable": false,
							"sortable": false,
							"id": "ActionButton",
							"stateColumn": "status",
							"width": 200,
							"style": {
								"textAlign": "center"
							}
						},
						{
							"Header": "ID",
							"accessor": "id",
							"width": 75
						},
						{
							"Header": "Name",
							"accessor": "name",
							"showField": "name",
							"type": "dynamicViewLink",
							"mod": "agency",
							"idField": "id",
							"width": 250,
							"style": {
								"minWidth": 250
							},
							"headerStyle": {
								"minWidth": 250
							},
							"filter": {
								"style": {
									"minWidth": 250
								}
							}
						},
						{
							"Header": "Status",
							"accessor": "status",
							"width": 75,
							"matchExact": "true",
							"apiFilter": {
								"api": "/lists",
								"apiObjectName": "list",
								"payload": {
									"action": "getListItems",
									"list_name": "Agency Status List"
								},
								"idField": "code",
								"valField": "full_name",
								"method": "post"
							}
						}]
					},
					"path": "./model/modules/agency/workspace.json"
				},
				"states": {
					"edit": {
						"id": "E",
						"previousStates": ["A",
						"I"],
						"form": {
							"title": "Edit Agency",
							"noDataTitle": "Create Agency",
							"payload": {
								"action": "updateAgency"
							},
							"instructionalText": "Enter an Agency Name.",
							"api": "agency",
							"apiOutObj": "agency",
							"apiInObj": "agency",
							"returnUrl": "/workspace/agency/latest",
							"submitButtonText": "Update Agency",
							"noDataSubmitButtonText": "Create Agency",
							"showConfirmation": false,
							"successMessage": "Succesfully updated ",
							"successMessageDataAppend": "name",
							"fields": [{
								"key": "id",
								"type": "hidden"
							},
							{
								"key": "name",
								"label": "Name",
								"required": true,
								"props": {
									"maxLength": 45
								}
							},
							{
								"key": "status",
								"label": "Status",
								"required": true,
								"options": [{
									"text": "Active",
									"value": "A"
								},
								{
									"text": "Inactive",
									"value": "I"
								}],
								"type": "select"
							}]
						},
						"path": "./model/modules/agency/states/edit.json"
					},
					"view": {
						"title": "Agency",
						"api": "agency",
						"stateColumn": "status",
						"apiOutObj": "agency",
						"elements": [{
							"type": "group",
							"title": "Agency Info",
							"elements": [{
								"key": "name",
								"label": "Name"
							},
							{
								"key": "status",
								"label": "Status"
							}]
						}],
						"path": "./model/modules/agency/states/view.json"
					}
				}
			}
		}
	}
}`;

export default strModel;