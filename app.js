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

let confirmation = confirm("Do you want to view a welcome message");
if (confirmation == true) {
    alert("Hello "+ Name )
}

