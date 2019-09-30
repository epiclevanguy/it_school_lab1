'use strict';

class Refregerator {
  constructor(color, make, model, price) {
    this.color = color; 
    this.make = make; 
    this.model = model;
    this.price = price; 
  }
  toString(){
  	return "Color: " + this.color + " Make: " + this.make + " Model: " + this.model + " Price: " + this.price;
  }
}

let r = new Refregerator("Red", "Samsung", "zx28", 23.56);

function print(){
	document.getElementById('content').innerHTML = r;
}