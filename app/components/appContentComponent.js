"use strict";
import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import HeaderComponent from './headerComponent';
import MainComponent from './main/main.js';
import FooterComponent from './footerComponent';



export default class AppContentComponent extends Component {

    render() {
        return (
            <div>
            	<MainComponent/>
            </div>
    	);
    }

}
