import React from 'react';
import logo from './logo.svg';
import './App.css';
import Log from '@fw/log';
import HyperLink from '@fw/hyperlink';
import DisplayDateTime from '@fw/displaydatetime';
import DisplayEmail from '@fw/displayemail';
import DisplayPhoneNumber from '@fw/displayphonenumber';
import { getHash, setHash } from '@fw/hash';
// import { getStateModel } from '@fw/models';
import { clearCookies } from '@fw/session';

function App() {
  Log.error('HELLO!!!!!!!!!!!!!!!');
  const obj = {
    filter: ['hello', 'filter'],
    sort: ['hello', 'sort']
  }

  const hash = getHash(obj);
  console.log('my hash=', hash);
  setHash(obj.filter, obj.sort);
  console.log('my log color', process.env.LOG_COLOR);
  // const model = getStateModel('user', 'edit');
  // console.log("my model=", model);
  clearCookies();
  console.log('cleared my cookies!')
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <HyperLink label={"hell worold"} />
        {DisplayDateTime("2020-04-30T14:44:53.125Z")}
        {DisplayEmail("ricky.do@dps.texas.gov")}
        {DisplayPhoneNumber("1112223333")}
        <p>
          Edit <code>src/App.js</code> and save to reload...
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
