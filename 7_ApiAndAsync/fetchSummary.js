fetch("url")
.then()
.catch()
.finally()
/*
 When we make a request using fetch method then it perform two opeartion behind the scene 
 1.make a request to the resource.
 2.it reserves a memory space name as data. and data has two methods/function 1.[isfullfilled] 2. [isrejected]

 Due to some reason if the browser or node isn't able to make request then it will trigger [isrejected] state it will throw a error and we will get this as response in data.
 If browser is able to make request then it will always comes with response even if it has error in the response then [isfullfilled] state will get trigger and we will get this as response in data.

*/

// Fetch has the highest priority in call back Que.