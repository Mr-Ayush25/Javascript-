// Q1) Remove Extra Property of an array || Loop over the original property of an array.
// Solution :-
// Extra property added to 
Array.prototype.extraProp = "Ayush"
const trial = [2,3,5,6]
// Using any loop expected output will be.
/*
for(let vals of trial){
    console.log("In for Of Loop");
    console.log(vals);
}
*/
// But for accessing it's propertie's we have to use for In Loop
/*
for(let vals in trial){
    console.log("In for in Loop");
    console.log(trial[vals]);
}
*/
for(let vals in trial){
     // To get rid of extra property we have use hasownproperty Method.
     if(trial.hasOwnProperty(vals)){
        console.log(trial[vals]);
    }
}