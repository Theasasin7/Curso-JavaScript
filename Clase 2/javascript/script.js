let name = prompt("Name:");
let age = parseInt(prompt("How old are you?"));

if (name != "" && age >= 21){
    alert ("The user " + name + " is " + age + " years old and is of legal age to drink alcohol.");
}else if (!name != ""){
    alert ("You need to type your name to continue.");
}else if (isNaN(age)){
    alert ("You need to type your age to continue.");
}else {
    alert ("The user " + name + " is " + age + " years old and is not old enough to consume alcohol.");
}