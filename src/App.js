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
import { clearCookies } from '@fw/session';
import getUrlVars from '@fw/geturlsvars';
import DynamicViewLink from '@fw/dynamicviewlink';
import StateChange from '@fw/statechange';
import { capitalize } from '@fw/stringutils';
import strModel from './model';

function App() {
  Log.trace('App is running...');
  const obj = {
    filter: ['hello', 'filter'],
    sort: ['hello', 'sort']
  }
  console.log('URL Vars are = ', getUrlVars());
  localStorage.setItem(`current_app_model`, strModel);
  const techModule = 'Tech';
  console.log('statemodel = ', getStateModel(techModule,'Support'));
  console.log('Fom storage = ', JSON.parse(localStorage.getItem(`current_app_model`)));
  const hash = getHash(obj);
  console.log('my hash=', hash);
  setHash(obj.filter, obj.sort);
  console.log('my log color', process.env.LOG_COLOR);
  console.log('log level=', process.env.LOG_LEVEL)  
  console.log('node env=', process.env.NODE_ENV)
  
  // clearCookies();
  // console.log('cleared my cookies!')
  
  // test statechange
  const agencyModule = 'agency';
  const agencyModel = getModuleModel(agencyModule);
  console.log('my agency model=', agencyModel)
  // const stateColumn = {
  //   Header: "Action",
  //   type: "stateChange",
  //   label: "Choose Action",
  //   filterable: false,
  //   sortable: false,
  //   id: "ActionButton",
  //   width: 200,
  //   style: {
  //     textAlign: "center"
  //   },
  // };
  // const original = {
  //   ...stateColumn,
  //   showField: "my_show_field",
  //   idField: "my_id_field",
  //   stateColumn: 1,
  // };
  const original = agencyModel.states.edit;
  const stateColumn = "status";
  console.log('original', original);
  console.log('my state column', stateColumn);


  // test stringutils
  const capStr = 'capitalize me captain!';

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
          {capitalize(capStr, ' ')}
        </p>
        <p>
          StateChange
        </p>

        <StateChange history={{}} model={agencyModel} module={agencyModule} original={original} stateColumn={stateColumn} />
      </header>
    </div>
  );
}


export default App;
