var inherit = require("./utils");
var Event = require("./event");
var EventTarget = require("./event-target");

function Node() {
  this.id = 0;
  this._super();
}

inherit(Node, EventTarget, { name: "node" });

var obj = {
  count: 0
};
var node = new Node();
var event = new Event("testEvent", node);

function handler(e) {
  this.count++;
  console.log("+++++++++++++++++++++++++++++++++++++++++++++");
  console.log("e: ", e);
  console.log("+++++++++++++++++++++++++++++++++++++++++++++");
  console.log("run times: ", this.count);
}

//test on methond
var listener = node.on("testEvent", handler, obj);
node.emit(event);

//test off methond
node.off("testEvent", listener);
node.emit(event);
