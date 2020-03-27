# rps2

This js script allows you to create a simple web page easily. Various features are availabe such as ```Navigation Bar```,```Image Silder```, etc... 

copy and paste the below ```script tag``` to your html code to use all the features
```html
<script src="https://rauls963.github.io/rps2/for_index.js"></script>
```

The following code snippet creates a __navigation bar__ easily in just few lines of code using the ```NavBar``` class.
```javascript
var navbar = new NavBar('table','nav-bar');
navbar.setPages(
	{
		"google":"https://www.google.com",
		"youtube":"https://www.youtube.com",
		"wikipedia":"https://www.wikipedia.org",
		"stackoverflow":"https://stackoverflow.com/"

	});
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
