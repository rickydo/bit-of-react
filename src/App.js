import React from 'react';
import logo from './logo.svg';
import './App.css';
import Log from '@fw/log';
import HyperLink from '@fw/hyperlink';
import DisplayDateTime from '@fw/displaydatetime';
import DisplayEmail from '@fw/displayemail';
import DisplayPhoneNumber from '@fw/displayphonenumber';
import { getHash, setHash } from '@fw/hash';
import { getModuleModel, getStateModel } from '@fw/models';
// import { clearCookies } from '@fw/session';
import getUrlVars from '@fw/geturlsvars';
import DynamicViewLink from '@fw/dynamicviewlink';
import StateChange from '@fw/statechange';
import { capitalize } from '@fw/stringutils';

function App() {
  Log.trace('App is running...');
  const obj = {
    filter: ['hello', 'filter'],
    sort: ['hello', 'sort']
  }
  console.log('URL Vars are = ', getUrlVars());
  localStorage.setItem(`current_app_model`, strModel);
  const module = 'Tech';
  console.log('statemodel = ', getStateModel(module,'Support'));
  console.log('Fom storage = ', JSON.parse(localStorage.getItem(`current_app_model`)));
  const hash = getHash(obj);
  console.log('my hash=', hash);
  setHash(obj.filter, obj.sort);
  console.log('my log color', process.env.LOG_COLOR);
  // console.log("my model=", model);
  
  
  // clearCookies();
  // console.log('cleared my cookies!')
  
  // test statemodel
  const model = getModuleModel(module);
  console.log('my model=', model)

  // test stringutils
  const capStr = 'capitalize me captain!';
  console.log(capitalize(capStr, ' '));


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <HyperLink label={"hello world"} />
        {DisplayDateTime("2020-04-30T14:44:53.125Z")}
        {DisplayEmail("ricky.do@dps.texas.gov")}
        {DisplayPhoneNumber("1112223333")}
        <DynamicViewLink content="Link to Technical" mod="Technical" id="23" />

        <p>
          StateChange
        </p>

        {/* <StateChange history={{}} model={model} module={module} original={original} stateColumn={stateColumn} /> */}
      </header>
    </div>
  );
}

// original
  // cellProps.original

// statecolumn

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
            "something": "else",
            "stateColumn": "database_column_name"
          }
				}
			}
		}
	}
}`;

export default App;
