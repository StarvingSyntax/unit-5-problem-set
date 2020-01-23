// Get the node, assign to variable
const name = document.getElementById('name');
const container = document.getElementById('contact')

container.addEventListener('dblclick', function(e) {

    const button = document.createElement("button"); // Create button
    const user_input = document.createElement("input"); // Create input
    user_input.setAttribute( "placeholder", "Type a new Name...");
    user_input.setAttribute("id", "name") // Set ID
    button.style.height = "18px"
    container.appendChild(user_input) // Append input tag to container
    name.remove() // remove name tag
    container.appendChild(button)
    console.log(name)
    // let temp = name.innerHTML
    
    // 
    // 
    // 
    // button.setAttribute("type", "submit")
    // container.appendChild(button)
    // newName.innerHTML = ''
    // name.parentNode.replaceChild(newName, name)
    
});


    // // Create an empty element node
    // 
    
    // // Give it an id attribute called 'name'
    // // newName.id = "name";
    // // // Set Value to value of current p tag.
    // // newName.innerHTML = name.innerHTML

// });

// new event listener
// find submit button
// upon submit, create new p tag with the value name