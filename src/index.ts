import { Observable as Rx } from "rxjs";

// console.log("hello 2adc");
// console.log(Rx);

var observable = new Rx((observer: any) => {
    try {
        observer.next('hey guys')
        observer.next('observation complete')
        setInterval(() => {
            observer.next("i am good")
        }, 1000)
        // observer.complete()
        // observer.next('wont be executed')
    }
    catch (err) {
        observer.error(err)
    }
});
//dis be new
let observer = observable.subscribe({
    next: (x: any) => addItem(x),
    error: (error: any) => addItem(error),
    complete: () => addItem("completed"),
})

setTimeout(() => {
    observer.unsubscribe();
}, 5001) //after 5s we unsub

//dis be old
// observable.subscribe(
//     (x:any)=> addItem(x),
//     (error:any) => addItem(error),
//     () => addItem("completed"),
// )

// let addItem = (val:any) => { //doesnt work...why?
//     var node = document.createElement("li");
//     var textnode = document.createTextNode(val);
//     node.appendChild(textnode);
//     document.querySelector(".output").appendChild(node)
// }
function addItem(val: any) {
    // let addItem = function(val:any){
    var node = document.createElement("li");
    var textnode = document.createTextNode(val);
    node.appendChild(textnode);
    document.querySelector(".output").appendChild(node);
}