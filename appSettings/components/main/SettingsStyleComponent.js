class WixCtrl extends React.Component {
	render(){
		return  <div 
		data-wix-model={this.props.data.model}
		data-wix-param={this.props.data.param} 
		data-wix-ctrl={this.props.data.ctrl} 
		data-wix-options={this.props.data.options}
		></div>;
	}
}

class WrapAdmin extends React.Component {
    constructor(props) {
		super(props);
		this.wixCtrlsData0 = props.data;
	}
	render(){
		return <div data-tab="tab0" className="tab-pane" id="first-tab">
                <div className="gallery-manager wrapAdmin">
                    <div className="container">
                        <div className="col-md-7 col-sm-7 col-xs-7 left">
                            <div className="imgs">

                            </div>
                        </div>
                        <div className="col-md-5 col-sm-5 col-xs-5 right">
                            <div className="top">
                                <button className="newImage uilib-btn btn-btn-green">Add a New Item</button>
                            </div>

                            <div className="edit-form">
                                <div className="row">
                                    <div className="label col-md-5 col-sm-5 col-xs-5">Title:</div>
                                    <WixCtrl className="inputWrap title col-md-7 col-sm-7 col-xs-7" data={this.wixCtrlsData0["title"]} />
                                </div>
                                <div className="row">
                                    <div className="label col-md-5 col-sm-5 col-xs-5">Description:</div>
                                    	<WixCtrl className="inputWrap description col-md-7 col-sm-7 col-xs-7" data={this.wixCtrlsData0["desc"]} />
                                </div>
                                <div className="row">
                                    <div className="label col-md-5 col-sm-5 col-xs-5">Mini description:</div>
                                    <WixCtrl className="inputWrap mDescription col-md-7 col-sm-7 col-xs-7" data={this.wixCtrlsData0["mDesc"]} />
                                </div>
                                <div className="row">
                                    <div className="label col-md-5 col-sm-5 col-xs-5">Button name:</div>
                                    	<WixCtrl className="inputWrap buttonName col-md-7 col-sm-7 col-xs-7" data={this.wixCtrlsData0["bName"]} />
                                </div>
                                <div className="row">
                                    <div className="label col-md-5 col-sm-5 col-xs-5">Video url:</div>
                                    	<WixCtrl className="inputWrap videoUrl col-md-7 col-sm-7 col-xs-7" data={this.wixCtrlsData0["vUrl"]} />
                                </div>
                                <div className="row">
                                    <div className="label col-md-5 col-sm-5 col-xs-5">External url:</div>
                                    	<WixCtrl className="inputWrap externalUrl col-md-7 col-sm-7 col-xs-7" data={this.wixCtrlsData0["eUrl"]} />
                                </div>
                                <div className="row">
                                    <div className="col-xs-6"><button className="btnDelete uilib-btn btn-btn-green">Delete</button></div>
                                    <div className="col-xs-6"><button className="btnApply uilib-btn btn-btn-green">Apply</button></div>
                                </div>
                                <div className="row bottom">
                                    <div className="image"></div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
		}

}

class TextStyle extends React.Component {
    constructor(props) {
		super(props);
		this.wixCtrlsData = props.settings;
	}
	render(){
		return <div className="wraf">
					<h4>choose application</h4>
	                <div data-wix-ctrl="Dropdown" data-wix-model="Skin" data-wix-options="{ startWithFont:0}">
	                    <div value="gallery">Gallery</div>
	                    <div value="matrix">Matrix</div>
	                </div>
	                <div data-tab="galleryStyle" className="galleryStyle">
						<div className="row">
		                    <div className="label col-xs-3">Auto play, sec:</div>
		                	<div className="col-xs-5">
			                	<WixCtrl data={this.wixCtrlsData["autoPlay"]} />
			                	</div>
		                </div>
		                <div className="row">
		                    <div className="label col-xs-3">Overlay color & opacity:</div>
		                    <div className="col-xs-5">
		                    	<WixCtrl data={this.wixCtrlsData["colorWOpacity"]} />
		                    </div>
		                </div>

						<div className="row"><h4>Text style</h4></div>
						<div className="row">
						    <div className="label col-xs-3">Title font:</div>
						    <div className="col-xs-6">
						        <WixCtrl data={this.wixCtrlsData["titleTextColor"]} />
						        <WixCtrl data={this.wixCtrlsData["titleFontSize"]} />
						    </div>
						</div>
						<div className="row">
						    <div className="label col-xs-3">Description font:</div>
						    <div className="col-xs-6">
							    <WixCtrl data={this.wixCtrlsData["DescriptionTextColor"]} />
							    <WixCtrl data={this.wixCtrlsData["DescriptionFontSize"]} />
						    </div>
						</div>
						<div className="row">
						    <div className="label col-xs-3">Thumbnail title font:</div>
						    <div className="col-xs-6">
						        <WixCtrl data={this.wixCtrlsData["thumbTitleTextColor"]} />
						       <WixCtrl data={this.wixCtrlsData["thumbTitleFontSize"]} />
						    </div>
						</div>
						<div className="row">
						    <div className="label col-xs-3">Thumbnail description font:</div>
						    <div className="col-xs-6">
						        <WixCtrl data={this.wixCtrlsData["thumbDescriptionTextColor"]} />
						        <WixCtrl data={this.wixCtrlsData["thumbDescriptionFontSize"]} />
						    </div>
						</div>
						<div className="row">
						    <div className="label col-xs-3">Text shadow:</div>
						    <div className="col-xs-6">
						        <WixCtrl data={this.wixCtrlsData["TextShadowColor"]} />
						        <WixCtrl data={this.wixCtrlsData["SpinnerShadowRL"]} />
						        <WixCtrl data={this.wixCtrlsData["SpinnerShadowTB"]} />
						        <WixCtrl data={this.wixCtrlsData["SpinnerShadow"]} />
						    </div>
						</div>

						<div className="row"><h4>CTA button settings</h4></div>
		                <div className="row">
		                    <div className="label col-xs-3">Text color & opacity:</div>
		                    <div className="col-xs-5">
		                     	<WixCtrl data={this.wixCtrlsData["TextColor"]} />
		                    </div>
		                </div>
		                 <div className="row">
		                    <div className="label col-xs-3">Hover- text color & opacity:</div>
		                    <div className="col-xs-5">
		                    	<WixCtrl data={this.wixCtrlsData["HoverTextColor"]} />
		                    </div>
		                </div>
		                 <div className="row">
		                    <div className="label col-xs-3">Background color & opacity:</div>
		                    <div className="col-xs-5">
		                    	<WixCtrl data={this.wixCtrlsData["BackgroundColor"]} />
		                    </div>
		                </div>
		                 <div className="row">
		                    <div className="label col-xs-3">Hover- background color& opacity:</div>
		                    <div className="col-xs-5">
		                    	<WixCtrl data={this.wixCtrlsData["HoverBackgroundColor"]} />
		                    </div>
		                </div>
		                <div className="row">
		                    <div className="label col-xs-3">Border color & opacity:</div>
		                    <div className="col-xs-5">
		                    	<WixCtrl data={this.wixCtrlsData["BorderColor"]} />
		                    </div>
		                </div>
		                 <div className="row">
		                    <div className="label col-xs-3">Hover- border color& opacity:</div>
		                    <div className="col-xs-5">
		                    	<WixCtrl data={this.wixCtrlsData["HoverBorderColor"]} />
		                    </div>
		                </div>
	                </div>
		    	</div>;
	}

}

class SettingsStyleComponent extends React.Component {
	constructor(props) {
		super(props);
		this.wixCtrlsData = {
			"title":{
				model:"title",
				ctrl:"Input",
				options:"{placeholder: ''}"
			},"desc":{
				model:"desc",
				ctrl:"Input",
				options:"{placeholder: ''}"
			},"mDesc":{
				model:"mDesc",
				ctrl:"Input",
				options:"{placeholder: ''}"
			},"bName":{
				model:"bName",
				ctrl:"Input",
				options:"{placeholder: ''}"
			},"vUrl":{
				model:"vUrl",
				ctrl:"Input",
				options:"{placeholder: ''}"
			},"eUrl":{
				model:"eUrl",
				ctrl:"Input",
				options:"{placeholder: ''}"
			}
		}

		this.wixCtrlsDataGallery = {
			"autoPlay":{
				model:"autoPlay",
				ctrl:"Spinner",
				options:"{minValue:0, maxValue:60, size: 'medium'}"
			},
			"colorWOpacity":{
				param:"colorWOpacity",
				ctrl:"ColorPickerWithOpacity",
				options:"{startWithColor: 'color-5', startWithOpacity:0}"
			},
			"titleTextColor":{
				param:"titleTextColor",
				ctrl:"ColorPicker",
				options:"{startWithColor:'color-1'}"
			},
			"titleFontSize":{
				param:"titleFontSize",
				ctrl:"FontStylePicker",
				options:"{ value: 'Heading-XL'}"
			},
			"DescriptionTextColor":{
				param:"DescriptionTextColor",
				ctrl:"ColorPicker",
				options:"{startWithColor:'color-1'}"
			},
			"DescriptionFontSize":{
				param:"DescriptionFontSize",
				ctrl:"FontStylePicker",
				options:"{ value: 'Heading-S'}"
			},
			"thumbTitleTextColor":{
				param:"thumbTitleTextColor",
				ctrl:"ColorPicker",
				options:"{startWithColor:'color-1'}"
			},
			"thumbTitleFontSize":{
				param:"thumbTitleFontSize",
				ctrl:"FontStylePicker",
				options:"{ value: 'Heading-S'}"
			},
			"thumbDescriptionTextColor":{
				param:"thumbDescriptionTextColor",
				ctrl:"ColorPicker",
				options:"{startWithColor:'color-1'}"
			},
			"thumbDescriptionFontSize":{
				param:"thumbDescriptionFontSize",
				ctrl:"FontStylePicker",
				options:"{ value: 'Heading-S'}"
			},
			"TextShadowColor":{
				param:"TextShadowColor",
				ctrl:"ColorPicker",
				options:"{startWithColor: 'color-3'}"
			},
			"SpinnerShadowRL":{
				param:"SpinnerShadowRL",
				ctrl:"Spinner",
				options:"{ startWithMargin:0, minValue:0, maxValue:90 }"
			},
			"SpinnerShadowTB":{
				param:"SpinnerShadowTB",
				ctrl:"Spinner",
				options:"{ startWithMargin:0, minValue:0, maxValue:90 }"
			},
			"SpinnerShadow":{
				param:"SpinnerShadowRL",
				ctrl:"Spinner",
				options:"{ startWithMargin:0, minValue:0, maxValue:90 }"
			},
			"TextColor":{
				param:"TextColor",
				ctrl:"ColorPickerWithOpacity",
				options:"{startWithColor: 'color-1', startWithOpacity:100}"
			},
			"HoverTextColor":{
				param:"HoverTextColor",
				ctrl:"ColorPickerWithOpacity",
				options:"{startWithColor: 'color-5', startWithOpacity:100}"
			},
			"BackgroundColor":{
				param:"BackgroundColor",
				ctrl:"ColorPickerWithOpacity",
				options:"{startWithColor: 'color-5', startWithOpacity:50}"
			},
			"HoverBackgroundColor":{
				param:"BackgroundColor",
				ctrl:"ColorPickerWithOpacity",
				options:"{startWithColor: 'color-1', startWithOpacity:100}"
			},
			"BorderColor":{
				param:"BorderColor",
				ctrl:"ColorPickerWithOpacity",
				options:"{startWithColor: 'color-1', startWithOpacity:100}"
			},
			"HoverBorderColor":{
				param:"HoverBorderColor",
				ctrl:"ColorPickerWithOpacity",
				options:"{startWithColor: 'color-5', startWithOpacity:100}"
			}
		}

		this.wixCtrlsDataMatrix = {
			"RowsNumber":{
				param:"RowsNumber",
				ctrl:"Spinner",
				options:"{minValue:1, maxValue:90 }"
			},"RowsColumns":{
				param:"RowsColumns",
				ctrl:"Spinner",
				options:"{minValue:1, maxValue:90 }"
			},"HorizontalMarginBetweenColumns":{
				param:"HorizontalMarginBetweenColumns",
				ctrl:"Spinner",
				options:"{minValue:0, maxValue:90 }"
			},"VerticalMarginBetweenRows":{
				param:"VerticalMarginBetweenRows",
				ctrl:"Spinner",
				options:"{minValue:0, maxValue:90 }"
			}
		}

		this.tabs = [{
			label: "Manage items",
			component: "WrapAdmin",
			props: {data:this.wixCtrlsData}
		},{
			label: "Settings",
			component: "TextStyle",
			props: {settings:this.wixCtrlsDataGallery}
		},{
			label: "Matrix Style",
			component: "Matrixstyle",
			props: {matrixSettings:this.wixCtrlsDataMatrix}
		}];
	}
	render(){
		return <div>
					<TabsComponent tabs={this.tabs}/>	
	    		 </div>;
	}
}

export default SettingsStyleComponent;


class TabsComponent extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			activeIndex: 0
		}
	}
	getComponent(name,props){
			return React.createElement(eval(name),props, null);
	}
	_click(index){
		this.setState({activeIndex:index})
	}
	render(){
		return <div>
					<ul className="tabs">
						{this.props.tabs.map((tab,i)=>
							<li className={(this.state.activeIndex == i) && "tab"} onClick={()=>this._click(i)} key={i}>{tab.label}</li>
						)}
			        </ul>
			        <div className="content">
						{this.props.tabs.map((tab,i)=>
							<div className={(this.state.activeIndex == i) && "active"} key={i}>{this.getComponent(tab.component,tab.props)}</div>
						)}
					</div>	
	    		 </div>;
	}
}


class Matrixstyle extends React.Component {
    constructor(props) {
		super(props);
		this.wixCtrlsData = props.matrixSettings;
	}
	render(){
		return  <div data-tab="matrixStyle" className="matrixStyle container">
				    <div className="row"><h4>Matrix style</h4></div>
				    <div className="row">
				        <div className="label col-xs-3">Rows number:</div>
				        <div className="col-xs-5">
				            <WixCtrl data={this.wixCtrlsData["RowsNumber"]} />
				        </div>
				    </div>
				    <div className="row">
				        <div className="label col-xs-3">Rows columns:</div>
				        <div className="col-xs-5">
				            <WixCtrl data={this.wixCtrlsData["RowsColumns"]} />
				        </div>
				    </div>
				    <div className="row">
				        <div className="label col-xs-3">Horizontal margin between columns:</div>
				        <div className="col-xs-5">
				            <WixCtrl data={this.wixCtrlsData["HorizontalMarginBetweenColumns"]} />
				        </div>
				    </div>
				    <div className="row">
				        <div className="label col-xs-3">Vertical margin between rows:</div>
				        <div className="col-xs-5">
				            <WixCtrl data={this.wixCtrlsData["VerticalMarginBetweenRows"]} />
				        </div>
				    </div>
			    </div>;
	}
}