"use strict";

//import SearchYoutube from '../../services/youtube/youtube.js';

import SettingsStyleComponent  from './SettingsStyleComponent';


class WixSettingsStyle extends React.Component {
	constructor(props) {
		super(props);
	}
	render(){
		return <div id="wraf">
			<SettingsStyleComponent />
		  </div>;
	}

}

React.render(<WixSettingsStyle />,document.getElementsByTagName('app-content')[0]);