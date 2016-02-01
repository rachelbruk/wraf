"use strict";
import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import DataService from '../../services/DataService.js';

var rows_global = 3, cols_global = 5;
var romMarginRight = 0, rowMarginBottom = 0;
var rowWidth = 100/cols_global;
var rowsWrapRight = romMarginRight/2;
var matrixSlides = '';
var index = 0;

class MatrixCtrl extends React.Component {
    render(){
        console.log(this.props.data,'data');
        var src = this.props.data.public_properties.src_small_img;
        return <div  className = "row" search = {this.props.data.title}>
                    <div className="row-in">
                        <span>{this.props.data.title}</span>
                        <img src = {src} />
                    </div>
                </div>;
    }
}

export default MatrixCtrl;

class MatrixCol extends React.Component {
    constructor(props) {
        super(props);
        this.MatrixData = props.data;
        
    }
    render(){
        var items = [];
            for(var i = 0; i < cols_global; i++) {
                items.push(<MatrixCtrl key={i} data={this.MatrixData[index]} />);
                console.log(index,'index');
                index++;
            }
            return <div>{items}</div>;
    }
}

export default MatrixCol;

class MatrixRow extends React.Component {
    constructor(props) {
        super(props);
        this.MatrixData = props.data;
        
    }
    render(){
        var items = [];
            for(var j = 0; j < rows_global; j++) {
                items.push(<div key={j} className="rows"><MatrixCol data={this.MatrixData} /></div>);
            }
            return <div>{items}</div>;
    }
}

export default MatrixRow;

class MainComponent extends React.Component { 
    constructor(props) {
        super(props);
this.MatrixData = [
    {
        "tags": "[ ]",
        "date_updated": "2016-01-12T19:20:50.664150",
        "title": "llllllllllll",
        "public_properties": {
            "small_sub_title": "",
            "second_button_href": "",
            "button_caption": "",
            "title": "Bora",
            "sub_title": "werlkgjerl;gj;lerjg;ler",
            "src_big_img": "//media.wixapps.net/wix-a091529b-0151-4768-a83e-4cb899c90de2/images/b9a5e5030e9f4055a51503f737134878/v1/fill/w_1920,h_816,al_c,q_75/file.jpg",
            "src_small_img": "http://static.wixstatic.com/media/a09152_2d1b97f81ced43ec857171dfca15eba3.jpg//v1/fill/w_321,h_200/file.jpg",
            "first_button_href": ""
        }

    },{
        "tags": "[ ]",
        "date_updated": "2016-01-12T19:20:50.664150",
        "title": "iiiiiiiiii",
        "public_properties": {
            "small_sub_title": "",
            "second_button_href": "",
            "button_caption": "",
            "title": "Bora",
            "sub_title": "werlkgjerl;gj;lerjg;ler",
            "src_big_img": "//media.wixapps.net/wix-a091529b-0151-4768-a83e-4cb899c90de2/images/b9a5e5030e9f4055a51503f737134878/v1/fill/w_1920,h_816,al_c,q_75/file.jpg",
            "src_small_img": "http://static.wixstatic.com/media/a09152_2d1b97f81ced43ec857171dfca15eba3.jpg//v1/fill/w_321,h_200/file.jpg",
            "first_button_href": ""
        }

    },{
        "tags": "[ ]",
        "date_updated": "2016-01-12T19:20:50.664150",
        "title": "yyyyyyy",
        "public_properties": {
            "small_sub_title": "",
            "second_button_href": "",
            "button_caption": "",
            "title": "Bora",
            "sub_title": "werlkgjerl;gj;lerjg;ler",
            "src_big_img": "//media.wixapps.net/wix-a091529b-0151-4768-a83e-4cb899c90de2/images/b9a5e5030e9f4055a51503f737134878/v1/fill/w_1920,h_816,al_c,q_75/file.jpg",
            "src_small_img": "http://static.wixstatic.com/media/a09152_2d1b97f81ced43ec857171dfca15eba3.jpg//v1/fill/w_321,h_200/file.jpg",
            "first_button_href": ""
        }

    },{
        "tags": "[ ]",
        "date_updated": "2016-01-12T19:20:50.664150",
        "title": "rrrrrr",
        "public_properties": {
            "small_sub_title": "",
            "second_button_href": "",
            "button_caption": "",
            "title": "Bora",
            "sub_title": "werlkgjerl;gj;lerjg;ler",
            "src_big_img": "//media.wixapps.net/wix-a091529b-0151-4768-a83e-4cb899c90de2/images/b9a5e5030e9f4055a51503f737134878/v1/fill/w_1920,h_816,al_c,q_75/file.jpg",
            "src_small_img": "http://static.wixstatic.com/media/a09152_2d1b97f81ced43ec857171dfca15eba3.jpg//v1/fill/w_321,h_200/file.jpg",
            "first_button_href": ""
        }

    },{
        "tags": "[ ]",
        "date_updated": "2016-01-12T19:20:50.664150",
        "title": "tttttt",
        "public_properties": {
            "small_sub_title": "",
            "second_button_href": "",
            "button_caption": "",
            "title": "Bora",
            "sub_title": "werlkgjerl;gj;lerjg;ler",
            "src_big_img": "//media.wixapps.net/wix-a091529b-0151-4768-a83e-4cb899c90de2/images/b9a5e5030e9f4055a51503f737134878/v1/fill/w_1920,h_816,al_c,q_75/file.jpg",
            "src_small_img": "http://static.wixstatic.com/media/a09152_2d1b97f81ced43ec857171dfca15eba3.jpg//v1/fill/w_321,h_200/file.jpg",
            "first_button_href": ""
        }

    },{
        "tags": "[ ]",
        "date_updated": "2016-01-12T19:20:50.664150",
        "title": "llllllllllll",
        "public_properties": {
            "small_sub_title": "",
            "second_button_href": "",
            "button_caption": "",
            "title": "Bora",
            "sub_title": "werlkgjerl;gj;lerjg;ler",
            "src_big_img": "//media.wixapps.net/wix-a091529b-0151-4768-a83e-4cb899c90de2/images/b9a5e5030e9f4055a51503f737134878/v1/fill/w_1920,h_816,al_c,q_75/file.jpg",
            "src_small_img": "http://static.wixstatic.com/media/a09152_2d1b97f81ced43ec857171dfca15eba3.jpg//v1/fill/w_321,h_200/file.jpg",
            "first_button_href": ""
        }

    },{
        "tags": "[ ]",
        "date_updated": "2016-01-12T19:20:50.664150",
        "title": "iiiiiiiiii",
        "public_properties": {
            "small_sub_title": "",
            "second_button_href": "",
            "button_caption": "",
            "title": "Bora",
            "sub_title": "werlkgjerl;gj;lerjg;ler",
            "src_big_img": "//media.wixapps.net/wix-a091529b-0151-4768-a83e-4cb899c90de2/images/b9a5e5030e9f4055a51503f737134878/v1/fill/w_1920,h_816,al_c,q_75/file.jpg",
            "src_small_img": "http://static.wixstatic.com/media/a09152_2d1b97f81ced43ec857171dfca15eba3.jpg//v1/fill/w_321,h_200/file.jpg",
            "first_button_href": ""
        }

    },{
        "tags": "[ ]",
        "date_updated": "2016-01-12T19:20:50.664150",
        "title": "yyyyyyy",
        "public_properties": {
            "small_sub_title": "",
            "second_button_href": "",
            "button_caption": "",
            "title": "Bora",
            "sub_title": "werlkgjerl;gj;lerjg;ler",
            "src_big_img": "//media.wixapps.net/wix-a091529b-0151-4768-a83e-4cb899c90de2/images/b9a5e5030e9f4055a51503f737134878/v1/fill/w_1920,h_816,al_c,q_75/file.jpg",
            "src_small_img": "http://static.wixstatic.com/media/a09152_2d1b97f81ced43ec857171dfca15eba3.jpg//v1/fill/w_321,h_200/file.jpg",
            "first_button_href": ""
        }

    },{
        "tags": "[ ]",
        "date_updated": "2016-01-12T19:20:50.664150",
        "title": "rrrrrr",
        "public_properties": {
            "small_sub_title": "",
            "second_button_href": "",
            "button_caption": "",
            "title": "Bora",
            "sub_title": "werlkgjerl;gj;lerjg;ler",
            "src_big_img": "//media.wixapps.net/wix-a091529b-0151-4768-a83e-4cb899c90de2/images/b9a5e5030e9f4055a51503f737134878/v1/fill/w_1920,h_816,al_c,q_75/file.jpg",
            "src_small_img": "http://static.wixstatic.com/media/a09152_2d1b97f81ced43ec857171dfca15eba3.jpg//v1/fill/w_321,h_200/file.jpg",
            "first_button_href": ""
        }

    },{
        "tags": "[ ]",
        "date_updated": "2016-01-12T19:20:50.664150",
        "title": "tttttt",
        "public_properties": {
            "small_sub_title": "",
            "second_button_href": "",
            "button_caption": "",
            "title": "Bora",
            "sub_title": "werlkgjerl;gj;lerjg;ler",
            "src_big_img": "//media.wixapps.net/wix-a091529b-0151-4768-a83e-4cb899c90de2/images/b9a5e5030e9f4055a51503f737134878/v1/fill/w_1920,h_816,al_c,q_75/file.jpg",
            "src_small_img": "http://static.wixstatic.com/media/a09152_2d1b97f81ced43ec857171dfca15eba3.jpg//v1/fill/w_321,h_200/file.jpg",
            "first_button_href": ""
        }

    },{
        "tags": "[ ]",
        "date_updated": "2016-01-12T19:20:50.664150",
        "title": "llllllllllll",
        "public_properties": {
            "small_sub_title": "",
            "second_button_href": "",
            "button_caption": "",
            "title": "Bora",
            "sub_title": "werlkgjerl;gj;lerjg;ler",
            "src_big_img": "//media.wixapps.net/wix-a091529b-0151-4768-a83e-4cb899c90de2/images/b9a5e5030e9f4055a51503f737134878/v1/fill/w_1920,h_816,al_c,q_75/file.jpg",
            "src_small_img": "http://static.wixstatic.com/media/a09152_2d1b97f81ced43ec857171dfca15eba3.jpg//v1/fill/w_321,h_200/file.jpg",
            "first_button_href": ""
        }

    },{
        "tags": "[ ]",
        "date_updated": "2016-01-12T19:20:50.664150",
        "title": "iiiiiiiiii",
        "public_properties": {
            "small_sub_title": "",
            "second_button_href": "",
            "button_caption": "",
            "title": "Bora",
            "sub_title": "werlkgjerl;gj;lerjg;ler",
            "src_big_img": "//media.wixapps.net/wix-a091529b-0151-4768-a83e-4cb899c90de2/images/b9a5e5030e9f4055a51503f737134878/v1/fill/w_1920,h_816,al_c,q_75/file.jpg",
            "src_small_img": "http://static.wixstatic.com/media/a09152_2d1b97f81ced43ec857171dfca15eba3.jpg//v1/fill/w_321,h_200/file.jpg",
            "first_button_href": ""
        }

    },{
        "tags": "[ ]",
        "date_updated": "2016-01-12T19:20:50.664150",
        "title": "yyyyyyy",
        "public_properties": {
            "small_sub_title": "",
            "second_button_href": "",
            "button_caption": "",
            "title": "Bora",
            "sub_title": "werlkgjerl;gj;lerjg;ler",
            "src_big_img": "//media.wixapps.net/wix-a091529b-0151-4768-a83e-4cb899c90de2/images/b9a5e5030e9f4055a51503f737134878/v1/fill/w_1920,h_816,al_c,q_75/file.jpg",
            "src_small_img": "http://static.wixstatic.com/media/a09152_2d1b97f81ced43ec857171dfca15eba3.jpg//v1/fill/w_321,h_200/file.jpg",
            "first_button_href": ""
        }

    },{
        "tags": "[ ]",
        "date_updated": "2016-01-12T19:20:50.664150",
        "title": "rrrrrr",
        "public_properties": {
            "small_sub_title": "",
            "second_button_href": "",
            "button_caption": "",
            "title": "Bora",
            "sub_title": "werlkgjerl;gj;lerjg;ler",
            "src_big_img": "//media.wixapps.net/wix-a091529b-0151-4768-a83e-4cb899c90de2/images/b9a5e5030e9f4055a51503f737134878/v1/fill/w_1920,h_816,al_c,q_75/file.jpg",
            "src_small_img": "http://static.wixstatic.com/media/a09152_2d1b97f81ced43ec857171dfca15eba3.jpg//v1/fill/w_321,h_200/file.jpg",
            "first_button_href": ""
        }

    },{
        "tags": "[ ]",
        "date_updated": "2016-01-12T19:20:50.664150",
        "title": "tttttt",
        "public_properties": {
            "small_sub_title": "",
            "second_button_href": "",
            "button_caption": "",
            "title": "Bora",
            "sub_title": "werlkgjerl;gj;lerjg;ler",
            "src_big_img": "//media.wixapps.net/wix-a091529b-0151-4768-a83e-4cb899c90de2/images/b9a5e5030e9f4055a51503f737134878/v1/fill/w_1920,h_816,al_c,q_75/file.jpg",
            "src_small_img": "http://static.wixstatic.com/media/a09152_2d1b97f81ced43ec857171dfca15eba3.jpg//v1/fill/w_321,h_200/file.jpg",
            "first_button_href": ""
        }

    },{
        "tags": "[ ]",
        "date_updated": "2016-01-12T19:20:50.664150",
        "title": "llllllllllll",
        "public_properties": {
            "small_sub_title": "",
            "second_button_href": "",
            "button_caption": "",
            "title": "Bora",
            "sub_title": "werlkgjerl;gj;lerjg;ler",
            "src_big_img": "//media.wixapps.net/wix-a091529b-0151-4768-a83e-4cb899c90de2/images/b9a5e5030e9f4055a51503f737134878/v1/fill/w_1920,h_816,al_c,q_75/file.jpg",
            "src_small_img": "http://static.wixstatic.com/media/a09152_2d1b97f81ced43ec857171dfca15eba3.jpg//v1/fill/w_321,h_200/file.jpg",
            "first_button_href": ""
        }

    },{
        "tags": "[ ]",
        "date_updated": "2016-01-12T19:20:50.664150",
        "title": "iiiiiiiiii",
        "public_properties": {
            "small_sub_title": "",
            "second_button_href": "",
            "button_caption": "",
            "title": "Bora",
            "sub_title": "werlkgjerl;gj;lerjg;ler",
            "src_big_img": "//media.wixapps.net/wix-a091529b-0151-4768-a83e-4cb899c90de2/images/b9a5e5030e9f4055a51503f737134878/v1/fill/w_1920,h_816,al_c,q_75/file.jpg",
            "src_small_img": "http://static.wixstatic.com/media/a09152_2d1b97f81ced43ec857171dfca15eba3.jpg//v1/fill/w_321,h_200/file.jpg",
            "first_button_href": ""
        }

    },{
        "tags": "[ ]",
        "date_updated": "2016-01-12T19:20:50.664150",
        "title": "yyyyyyy",
        "public_properties": {
            "small_sub_title": "",
            "second_button_href": "",
            "button_caption": "",
            "title": "Bora",
            "sub_title": "werlkgjerl;gj;lerjg;ler",
            "src_big_img": "//media.wixapps.net/wix-a091529b-0151-4768-a83e-4cb899c90de2/images/b9a5e5030e9f4055a51503f737134878/v1/fill/w_1920,h_816,al_c,q_75/file.jpg",
            "src_small_img": "http://static.wixstatic.com/media/a09152_2d1b97f81ced43ec857171dfca15eba3.jpg//v1/fill/w_321,h_200/file.jpg",
            "first_button_href": ""
        }

    },{
        "tags": "[ ]",
        "date_updated": "2016-01-12T19:20:50.664150",
        "title": "rrrrrr",
        "public_properties": {
            "small_sub_title": "",
            "second_button_href": "",
            "button_caption": "",
            "title": "Bora",
            "sub_title": "werlkgjerl;gj;lerjg;ler",
            "src_big_img": "//media.wixapps.net/wix-a091529b-0151-4768-a83e-4cb899c90de2/images/b9a5e5030e9f4055a51503f737134878/v1/fill/w_1920,h_816,al_c,q_75/file.jpg",
            "src_small_img": "http://static.wixstatic.com/media/a09152_2d1b97f81ced43ec857171dfca15eba3.jpg//v1/fill/w_321,h_200/file.jpg",
            "first_button_href": ""
        }

    },{
        "tags": "[ ]",
        "date_updated": "2016-01-12T19:20:50.664150",
        "title": "tttttt",
        "public_properties": {
            "small_sub_title": "",
            "second_button_href": "",
            "button_caption": "",
            "title": "Bora",
            "sub_title": "werlkgjerl;gj;lerjg;ler",
            "src_big_img": "//media.wixapps.net/wix-a091529b-0151-4768-a83e-4cb899c90de2/images/b9a5e5030e9f4055a51503f737134878/v1/fill/w_1920,h_816,al_c,q_75/file.jpg",
            "src_small_img": "http://static.wixstatic.com/media/a09152_2d1b97f81ced43ec857171dfca15eba3.jpg//v1/fill/w_321,h_200/file.jpg",
            "first_button_href": ""
        }

    }
];   
}
render() {
    return <div>
            <div className="matrix-container">
                <div className="search-wrap">
                    <div className="search">
                        <input type="search" name="search"  />
                        <input type="submit" value="Submit"/>
                    </div>
                </div>
            </div>
            <div className="matrix-gallery">
                <div className="matrix-gallery-inner">
                <MatrixRow data={this.MatrixData}/>
                </div>
            </div>
        </div>;
    }
}

export default MainComponent;




class MainComponent1 extends React.Component {
    render() {
        
        return (
            
            <MainComponent />
    );
    }

}

export default MainComponent1;