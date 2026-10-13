let Name=prompt("Enter your Name");
let a = Number(prompt("Enter your Physics marks"));
let b = Number(prompt("Enter your Chemistry marks"));
let c = Number(prompt("Enter your Maths marks"));

alert("Student Name: "+ Name);
alert("Total = "+(a+b+c));
alert("Average ="+((a+b+c)/3));

const Average = (a+b+c)/3;
if(Average >= 90 && Average <= 100){
    alert("Grade A");
}else if(Average >= 75){
    alert("Grade B");
}else if(Average >= 50){
    alert("Grade C");
}else if (Average < 50 && Average > 0){
    alert("Grade F");
} else{
    alert("Error");
}

let msg = confirm("Whether wants to calculate for another students also");

alert("Refresh the screen.Thankyou!");

