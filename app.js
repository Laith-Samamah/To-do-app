let Name = prompt("Enter your name");

let gender = prompt("Enter your gender (the answer should be male or female only)");
switch (gender) {
        case "male" :
        case "Male" :
        Name= "Mr." + " " + Name
        break;
        
        case "female":
        case "Female":
        Name= "Ms." + " " + Name
        break;
}

let age = prompt("How old are you?");

if (age <=0 ) {
    alert("your age is invalid, age must be greater than zero");
    age = prompt("How old are you?");
}

let confirmation = confirm("Do you want to view a welcome message?");
if (confirmation == true) {
    alert("Hello "+ Name )
}

let Q1 = prompt("Is this your first time using this website?\n(Yes or No)");
switch (Q1) {
    case "yes":
    case "y" :
     Q1="Yes"
     break;

    case "no" :
    case "n" :
     Q1="No"
     break;

    default:
        Q1= "Invalid"
    
}

let Q2 = prompt("Do you like movies?\n(Yes or No)");
switch (Q2) {
    case "yes":
    case "y" :
     Q2="Yes"
     break;
     
    case "no" :
    case "n" :
     Q2="No"
     break;

    default:
        Q2= "Invalid"
}


let Q3 = prompt("Do you watch movies every day?\n(Yes or No)");
switch (Q3) {
    case "yes":
    case "y" :
      Q3="Yes"
         break;
         
        case "no" :
        case "n" :
         Q3="No"
         break;
    
        default:
            Q3= "Invalid"
}

const answers=[Q1,Q2,Q3];
console.log(answers);

let rate = prompt("From 0 to 5, how many stars do you rate this website?\n(0 is the worst - 5 is the best)");

while (rate < 0) {
    rate = 0
    alert("Thank you for your review" + "\nYour rate is " + rate)
    break;
}

while (rate > 5) {
    rate = 5
    alert("Thank you for your review" + "\nYour rate is " + rate)
    break;
}

while ( rate >= 0 && rate <= 5  ) {
    alert("Thank you for your review" + "\nYour rate is " + rate)
    break;
}