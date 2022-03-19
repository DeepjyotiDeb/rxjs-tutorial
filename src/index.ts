import { Observable as Rx } from "rxjs";

// console.log("hello 2adc");
// console.log(Rx);

var observable = new Rx((observer:any) => {
    observer.next('hey guys')
});

observable.subscribe((x:any)=> addItem(x));

// const addItem = (val:any) => {
//     var node = document.createElement("li");
//     var textnode = document.createElement(val);
//     node.appendChild(textnode);
//     document.getElementById("output").appendChild(node)
// }
function addItem(val:any){
    var node = document.createElement("li");
    var textnode = document.createTextNode(val);
    node.appendChild(textnode);
    document.querySelector(".output").appendChild(node);
}
// import the fromEvent operator
// import { fromEvent } from 'rxjs';

// // grab button reference
// const button = document.querySelector(".myButton");

// // create an observable of button clicks
// const myObservable = fromEvent(button, 'click');

// // for now, let's just log the event on each click
// const subscription = myObservable.subscribe(event => console.log(event));