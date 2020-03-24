class Tag{
	constructor(tag,id){
		this.ele = document.createElement(tag);
		this.ele.id = id;
	}

	css(props){
		let keylist = Object.keys(props);
		console.log(keylist);
		var style = keylist.map((keys) => {
			this.ele.style[keys] = props[keys];
			return this.ele.style[keys];
		});
		console.log(style);
	}

	attrib(props){
		let keylist = Object.keys(props);
		var attributesValues = keylist.map((key)=>{
			this.ele[key] = props[key];
			return this.ele[key];
		});
		console.log(attributesValues);
	}

	getId(){
		return this.ele.id;
	}

	getNode(){
		return this.ele;
	}

	mount(parent_id){
		document.getElementById(parent_id).appendChild(this.ele);
	}
}

//example
/*
var d = new Tag('div','ff');
d.css({
	height:'100px',
	border:'1px solid black',
	width:'200px'
});
d.attrib({
	className:'div-class-name'
});
d.mount('root');
*/
