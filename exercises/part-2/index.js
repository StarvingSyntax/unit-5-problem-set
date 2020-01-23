// Get the node, assign to variable
const name = document.getElementById('name'); // Get P Tag
const container = document.getElementById('contact') // Get Div Tag

const button = document.createElement("button"); // Create button
const user_input = document.createElement("input"); // Create input
user_input.setAttribute( "placeholder", "Type a new Name..."); // Add placeholder to input
button.style.height = "18px"; // Increase button size
    
name.addEventListener('dblclick', function(e) {
    
    container.appendChild(user_input) // Append input tag to container
    name.innerHTML = "" // remove name tag
    container.appendChild(button)
    

});

button.addEventListener("click", function(e) {
    name.innerHTML = user_input.value;
    button.remove()
    user_input.remove()
})


// new event listener
// find submit button
// upon submit, create new p tag with the value name