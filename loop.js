let marks=[93,78,80,50,69];
let tot=0;
let average=0;

for(let i=0; i<marks.length; i++){

tot+=marks[i];
}
average=tot /marks.length;
if(average>=80 && average<=100){
    console.log("this student has Grade A:");
}
else if(average>=70 && average<=79){
    console.log("this student haS Grade B:");
}
else if(average>=60 && average<=69){
    console.log("this student has Grade C:");

}
else if(average>=50 && average<=59){
    console.log("this sudent has Grade D :");
}
else{
    console.log("Fail");
}

console.log(" French:" ,marks[0]);
console.log(" English:" ,marks[1]);
console.log("Geography:" ,marks[2]);
console.log("Chemestry:" ,marks[3]);
console.log("Mathematics:" ,marks[4]);

console.log("Total marks:", tot);
console.log("Average:", average);



