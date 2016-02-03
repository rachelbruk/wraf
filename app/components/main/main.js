"use strict";
import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import DataService from '../../services/DataService.json';

var rows_global = 2, cols_global = 5;
var romMarginRight = 0, rowMarginBottom = 0;
var rowWidth = 100/cols_global;
var rowsWrapRight = romMarginRight/2;
var matrixSlides = '';
var index = 0;

class Search extends React.Component {
    render(){
        return <style id = "search" ></style>;
    }
}
ReactDOM.render(<Search />,document.getElementsByTagName('head')[0]);

// class MatrixCtrl extends React.Component {

//     componentDidMount() {
//         var elem = document.querySelectorAll('.row');
//         for(var i = 0; i < elem.length; i++) {
//             elem[i].style.width = rowWidth + '%';
//         }
//         var rowIn = document.querySelectorAll('.matrix-gallery-inner .row-in');
//         // var img = document.querySelectorAll('.matrix-gallery-inner .row-in img');
//         for(var i = 0; i < rowIn.length; i++) {
//             rowIn[i].style.marginRight = romMarginRight;
//             rowIn[i].style.marginBottom = rowMarginBottom;
//         //     img[i].style.opacity = 0.1;
//         }
//         // setTimeout (function(){
//         //     var maxHeight = 0;
//         //     rowIn[i].style.height = 'auto';
//         //     rowIn[i].each(function() {
//         //     var thisHeight = $(this).height();
//         //         if (thisHeight > maxHeight) {
//         //             maxHeight = thisHeight;
//         //         }
//         //     });
//         //     rowIn.height(function(i,val){
//         //         if (val < maxHeight) {
//         //             val=maxHeight;
//         //         }
//         //         return val;
//         //     });
//         //     // rowIn.find('img').css({opacity: 1});
//         //     // rowIn.find('span').css({lineHeight: maxHeight + 'px'});
//         // }, 500); 
//     }
//     render(){
//         console.log(this.props.data.public_properties,'data');
//         var src = this.props.data.public_properties.src_small_img;
//         return <div data-search ={this.props.data.title}  className = "row" >
//                     <div className="row-in">
//                         <span>{this.props.data.title}</span>
//                         <img src = {src} />
//                     </div>
//                 </div>;
//     }
// }



class MatrixItem extends React.Component {

    render(){
        return   <li className="row" data-search ={this.props.title} >
                    <span>{this.props.title}</span>
                    <img src = {this.props.src} />
                </li>;
    }
}

class MatrixList extends React.Component {
    constructor(props) {
        super(props);
        this.MatrixData = props.data;
    }
    render(){
            return <ul className="list rows">
                {this.MatrixData.map((item, i)=>
                  <MatrixItem key={i} title={item.title} src={item.public_properties.src_small_img} />
                )}
            </ul>;
    }
}

class MainComponent extends React.Component {
    constructor(props) { 
        super(props);
        Wix.addEventListener(Wix.Events.STYLE_PARAMS_CHANGE, function (style) {
            console.log(style,'style'); 
            // if(style.fonts.Skin.index === 1) {
                cols_global = style.numbers.RowsColumns ? style.numbers.RowsColumns: 5;
                rows_global = style.numbers.RowsNumber ? style.numbers.RowsNumber : 1;
                // ReactDOM.render(<MainComponent />,document.getElementById('root'));

                var matrixMarginBetweenColumns, matrixMarginBetweenRows, index;
                matrixMarginBetweenColumns = document.querySelectorAll(".rows .row");
                for (index = 0; index < matrixMarginBetweenColumns.length; index++) {
                    matrixMarginBetweenColumns[index].style.marginRight = style.numbers.HorizontalMarginBetweenColumns + 'px';
                }
                matrixMarginBetweenRows = document.querySelectorAll(".rows .row");
                for (index = 0; index < matrixMarginBetweenRows.length; index++) {
                    matrixMarginBetweenRows[index].style.marginBottom = style.numbers.VerticalMarginBetweenRows + 'px';
                }
            // }
        });  
    this.MatrixData = MatrixData;
    this.cols = cols_global;
    this.MatrixData = this.MatrixData.splice(0, rows_global * cols_global); 
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
                <MatrixList data={this.MatrixData}/>
                </div>
            </div>
        </div>;
    }
}

export default MainComponent;






////////////////////////////////////////////////////////

var MatrixData = [
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