class Tag{
	constructor(tag,id,mount_id='root'){
		this.ele = document.createElement(tag);
		this.ele.id = id;
		this.mount_id = mount_id;
		document.getElementById(mount_id).appendChild(this.ele);
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
	
	innerhtml(txt){
		this.ele.innerHTML = txt;
	}

	setChildElements(eles){
		console.log(eles);
		let len = eles.length;
		for(let i=0;i<len;i++){
			document.getElementById(this.ele.id).appendChild(eles[i].getNode());
		}
	}

	getId(){
		return this.ele.id;
	}

	getNode(){
		return this.ele;
	}

	show(){
		this.ele.style.display = 'block';
	}

	hide(){
		this.ele.style.display = 'none';
	}

	remove(){
		document.getElementById(this.mount_id).removeChild(this.ele);
	}

}



class Link extends Tag{
	constructor(id,url='#',linkText='link',target=false){
		super('a',id);
		this.ele.href = url;
		this.ele.innerHTML = linkText;
		if(target == true){
			this.ele.target = '_blank';
		}
	}
}

class NavBar{
	constructor(id,mount_id){
		this.ele = document.createElement('table');
		this.ele.id = id;
		this.ele.width = "100%";
		this.ele.style.position = 'sticky';
		this.ele.style.top = '0';
		this.ele.style.backgroundColor = 'black';
		document.getElementById(mount_id).appendChild(this.ele);
	}

	setPages(objs){
		var len = objs.length;
		let keylists = Object.keys(objs);
		console.log(`keylist: ${keylists}`);
		let tr = document.createElement('tr');
		this.ele.appendChild(tr);
		keylists.map((key)=>{
			let td = document.createElement('td');
			td.align = 'center';
			td.innerHTML = `<a href='${objs[key]}' style="color:white" > ${key} </a>`;
			td.height = '40px';
			tr.appendChild(td);
		});
	}
}
