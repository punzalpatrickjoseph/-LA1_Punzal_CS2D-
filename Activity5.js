// Step 1: Create a variable named favActorFirstName and store your favorite actor's first name
let favActorFirstName = "Thomas";

// Step 2: Create a variable named favActorLastName and store their last name
let favActorLastName = "Middleditch";

// Step 3: Concatenate the first and last names into a variable named fullName
let fullName = favActorFirstName + " " + favActorLastName;

// Step 4: Create a variable named uppercase and store the capitalized version of your favorite actor's name
let uppercase = fullName.toUpperCase();

// Step 5: Create a variable named message and store a message with the uppercase full name
let message = `My favorite actor is ${uppercase}`;

// Step 6: Append the message to include "his best show is Silicon Valley"
message += " and his best show is Silicon Valley.";

// Step 7: Log all variables to the console
console.log("First Name:", favActorFirstName);
console.log("Last Name:", favActorLastName);
console.log("Full Name:", fullName);
console.log("Uppercase Name:", uppercase);
console.log("Message:", message);
