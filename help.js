class WebElement {
  constructor(tag, id) {
    this.ele = document.createElement(tag);
    this.ele.id = id;
  }

  getId() {
    return this.ele.id;
  }

  getNode() {
    return this.ele;
  }

  css(props) {
    var keyslist = Object.keys(props);
    console.log(keyslist);
    console.log(props);
    var style = keyslist.map((keys) => {
      this.ele.style[keys] = props[keys];
      return this.ele.style[keys];
    });
    console.log(style);
  }

  mount(pid) {
    document.getElementById(pid).appendChild(this.ele);
  }
}
