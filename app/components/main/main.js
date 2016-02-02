"use strict";
import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import DataService from '../../services/DataService.json';

var rows_global = 3, cols_global = 5;
var romMarginRight = 0, rowMarginBottom = 0;
var rowWidth = 100/cols_global;
var rowsWrapRight = romMarginRight/2;
var matrixSlides = '';
var index = 0;

Wix.addEventListener(Wix.Events.STYLE_PARAMS_CHANGE, function (style) {
    var matrixMarginBetweenColumns, matrixMarginBetweenRows, index;
    matrixMarginBetweenColumns = document.querySelectorAll(".rows .row");
    for (index = 0; index < matrixMarginBetweenColumns.length; index++) {
        matrixMarginBetweenColumns[index].style.marginRight = style.numbers.HorizontalMarginBetweenColumns + 'px';
    }
    matrixMarginBetweenRows = document.querySelectorAll(".rows .row");
    for (index = 0; index < matrixMarginBetweenRows.length; index++) {
        matrixMarginBetweenRows[index].style.marginBottom = style.numbers.VerticalMarginBetweenRows + 'px';
    }
});

class Search extends React.Component {
    render(){
        return <style id = "search" ></style>;
    }
}
ReactDOM.render(<Search />,document.getElementsByTagName('head')[0]);

class MatrixCtrl extends React.Component {

    componentDidMount() {
        var elem = document.querySelectorAll('.row');
        for(var i = 0; i < elem.length; i++) {
            elem[i].style.width = rowWidth + '%';
        }
        var rowIn = document.querySelectorAll('.matrix-gallery-inner .row-in');
        // var img = document.querySelectorAll('.matrix-gallery-inner .row-in img');
        for(var i = 0; i < rowIn.length; i++) {
            rowIn[i].style.marginRight = romMarginRight;
            rowIn[i].style.marginBottom = rowMarginBottom;
        //     img[i].style.opacity = 0.1;
        }
        // setTimeout (function(){
        //     var maxHeight = 0;
        //     rowIn[i].style.height = 'auto';
        //     rowIn[i].each(function() {
        //     var thisHeight = $(this).height();
        //         if (thisHeight > maxHeight) {
        //             maxHeight = thisHeight;
        //         }
        //     });
        //     rowIn.height(function(i,val){
        //         if (val < maxHeight) {
        //             val=maxHeight;
        //         }
        //         return val;
        //     });
        //     // rowIn.find('img').css({opacity: 1});
        //     // rowIn.find('span').css({lineHeight: maxHeight + 'px'});
        // }, 500); 
    }
    render(){
        var src = this.props.data.public_properties.src_small_img;
        return <div data-search ={this.props.data.title}  className = "row" >
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
                index++;
            }
            return <div className="Row">{items}</div>;
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
        // document.getElementsByClassName('.matrix-gallery .rows-wrap').style.left = rowsWrapRight;
        // document.getElementsByClassName('.matrix-gallery .rows-wrap').style.matrginBottom = rowMarginBottom;
    

        // var rowIn = $('.matrix-gallery-inner .row-in');
        // rowIn.css({marginRight: romMarginRight, marginBottom: rowMarginBottom});
        // rowIn.find('img').css({opacity: 0.1});

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
        "title": "qqqq",
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
        "title": "xxx",
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
        "title": "zzz",
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
        "title": "aaa",
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
        "title": "bbb",
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
        "title": "mmm",
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
        "title": "ppp",
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
        "title": "fff",
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
        "title": "ggg",
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
        "title": "nnnnn",
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
        "title": "mmmm",
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
        "title": "rrrgggg",
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
        "title": "vcvcv",
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
        "title": "awsedf",
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
        "title": "jhg",
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
onChange(e) {
    var val = e.target.value;
    var searchTag= document.getElementById('search');
    searchTag.innerHTML = val === '' ? '' : '.row:not([data-search*="'+ val +'"]){order:0; opacity: .3;}';
}
render() {
    return <div>
            <div className="matrix-container">
                <div className="search-wrap">
                    <div className="search">
                        <input type="search" name="search" onChange={this.onChange.bind(this)}/>
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