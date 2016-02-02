import AppTools from './services/AppTools';
import React,{Component} from 'react';
import ReactDOM from 'react-dom';
   
window.AppTools = AppTools;
import AppContentComponent from './components/appContentComponent';

function handleEvent (event) {
  console.log(event);
};

Wix.addEventListener(Wix.Events.SETTINGS_UPDATED, handleEvent);

if (Wix.Utils.getViewMode() !== 'standalone') {
   console.log("wix.Utils.getInstanceId: ",Wix.Utils.getInstanceId());
}

ReactDOM.render(<AppContentComponent/>,document.getElementById('root'));
