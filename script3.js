let num = Number(prompt("Enter a positive number"));


function multiply(){
    console.log("Multiplication Table of "+num);
    for(var i=1; i<=10; i++){
        console.log(num + " x "+i+" = "+(num*i));
    }
}
multiply();

let sum =0;

function summ(n){
    for(let i=1; i<=n; i++){
    sum = sum + i;
    }
}
summ(num);
alert("The Sum is "+ sum);

let star;
for(let i=1; i<=num; i++){
    for(let j=1; j<=i; j++){
        star = star + "*";
    }
    console.log(star);
}



if (num %2 == 0){
    alert("The number "+ num+" is even.");
}else{
    alert("The number "+ num+" is odd.");
}

let msg=confirm("Do you want to run the program again?");

alert("Refresh the screen. Thank you!");

