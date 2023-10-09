// Define an array of names
var names = ["Janaka", "Jalani", "Kalindu", "Sudaraka", "Jeni"];

// Loop over the array
for (var i = 0; i < names.length; i++) {
  // Get the current name
  var currentName = names[i];

  // Check if the name starts with 'J' or 'j'
  if (currentName.charAt(0).toLowerCase() === 'j') {
    // If it starts with 'J' or 'j', print "Goodbye" to the console
    console.log("Goodbye " + currentName);
  } else {
    // If it starts with any other letter, print "Hello" to the console
    console.log("Hello " + currentName);
  }
}
