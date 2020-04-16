# rps2

This js script allows you to create a simple web page easily. Various features are availabe such as ```Navigation Bar```,```Image Silder```, etc... 

copy and paste the below ```script tag``` to your html code to use all the features
```html
<script src="https://rauls963.github.io/rps2/for_index.js"></script>
```

The following code snippet creates a __navigation bar__ easily in just few lines of code using the ```NavBar``` class.
```javascript
var navbar = new NavBar('nav-bar-id','nav-bar');
navbar.setPages(
	{
		"google":"https://www.google.com",
		"youtube":"https://www.youtube.com",
		"wikipedia":"https://www.wikipedia.org",
		"stackoverflow":"https://stackoverflow.com/"

	});
```
## Functions of Tag class
* __```constructor(tag,id,mount_id):```__ The constructor for Tag class takes 3 arguments.
	* ```tag```: the tag argument takes the tag of the element which is to be created. eg: ```div```, ```a```, ```ul```,etc.. 
	* ```id```: the id argument takes the id for the element.
	* ```mount_id```: the mount id takes the id of the parent-tag where the element created should be placed/rendered.
	
* __```css(props):```__ The css function takes an object as a parameter. The object should contain css properties as keys and its values as values.
	```javascript
	tag_element.css({
	height:'400px',
	width:'400px',
	backgroundColor:'red'	
	});
	```
	
* __```attrib(props):```__ The attrib function takes an object as an argument. The object should contain html attributes and its values.
	```javascript
	tag_element.attrib({
	className:'tag-class-name',
	src:'source'
	});
	```

## Tag
```javascript
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

```

## Creating custom Features
To create your own custom Tags or Features extend the ```Tag``` class.
example:
```javascript
class Link extends Tag{
  constructor(id,url,linkText){
    super('a',id);
    this.url = url;
    this.linkText = linkText;
  }
  //other methods...
}

var link = new Link('id','url','linkText');

```
