// IIFe means Immediately invoked Function Expression.
// these function is used to stop poppulating the pollution of Global Scope.
// () writing function inside a parenthesis will be block scoped.

// ex Normal IIFe
/*
(function trial(){
    console.log("Hello There")
})()

(function trial2(){
    console.log("Hello There")
})()
*/
// By doing above thing it will throw an error beacuse the first IIFE has started but it doesn't know that where to stop. we can use ";" to define the stage.
// By doing that two IIFE can be written in one Page.
// Now this will work
(function trial(){
    console.log("Hello There")
})();

(function trial2(){
    console.log("Hello There")
})();
// IIFE can be named or anynommous function.
(()=>{
    console.log("Hello Ayush")
})();
// We can pass arguments as well.
((name)=>{
    console.log(`Hello ${name}`)
})("Ayush");
