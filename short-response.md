# Unit 5 Assessment: The Document Object Model 
## Short Response Section 

1. In your own words, answer the following questions: what is the Document Object Model? Why is it useful?

  The DOM is an object representation of our HTML/XML file. It allows us to interact with our page by modifying and updating files.
  The DOM is essential because it allows you to create web apps that can be updated without needing to refresh the page. By utilizing 
  this we can even create pages that can by cusomtized, updated, or modified by the viewer.
  
2. Given some HTML that looks like this:

      ```html
      <div id="content">
        <h1>Listings</h1>
        <a id="about" class="primary" href="/about">About Our Listings</a>
      </div>
      ```

What are three different `document` methods that you could use to select the `a` element and store it into a variable?

  const getAnchorTags = document.querySelectorAll("a");
  
  const getAnchorID = document.getElementById("about");
  
  const getAnchorClass = document.getElementsByClassName("primary");

5. Assuming we have the following code in an HTML file. Describe what the JavaScript code is doing. What would happen when we submit the form?

      ```html
      <form id="new-cat" action="/" method="POST">
        <label for="cat-name">Name</label>
        <input type="text" name="cat-name" value="">
        <input type="submit" name="" value="Create Cat">
      </form>

      <ul id="cat-list">
      </ul>


      <script src="index.js" charset="utf-8"></script>
      ```

      ```js
      const catForm = document.getElementById('new-cat');

      catForm.addEventListener('submit', function(){
        const input = catForm[1];
        const name = input.value;
        const catList = document.getElementById('cat-list');

        const catListItem = document.createElement('li');
        catListItem.innerText = name;
        catList.append(catListItem);
      })
      ```
      
      Submitting the Form will allows us to append the current value of the first input tag to the list 'cat-list'. This is because upon
      clicking submit a callback function will be ran. This function take the node at the 1st(not the 0th) index of the returned node list from line 42.
      This is the first input tag, where the user inputs their response. Next, we assign that value to a variable name and create a list item 
      with that using innerText. The list item is then appended onto catList, a variable containing an unordered list. Each submit will append a new value to the list.
      
      

6. The following HTML and JavaScript creates a button that logs a message to the console each time it is clicked. What line or lines of code could you remove from the JavaScript file and keep the same behavior? Assume that the JavaScript file is being loaded into the HTML via a script tag.

      ```html
      <button id="log">Click to Log to Console</button>

      ```

      ```js
      const button = document.getElementById('log')

      button.addEventListener('click', function(e){
        e.preventDefault();
        e.stopPropagation();
        console.log("Logging...")
      })
      ```
      
      I would remove lines 73-74 and the 'e' parameter. Using preventDefault() and stopPropagation() seems like overkill as theres not 
      really anything the button is doing that would require those. The point of this event listener is log to the console.

7. When developing web applications, what are some examples of events that a user might initiate? Describe at least five.

  A user can interact with your web in multiple ways. More specificaly, they can use mouse and keyboard events like a click, a double 
  click, pressing the up^ key, pressing the down key, or pressing enter.

8. Given the following HTML file, describe what would happen when a user clicks the "Alert" button? What change would you need to make to make our "handleClick" function fire?

      ```html
      <!DOCTYPE html>
      <html lang="en" dir="ltr">
        <head>
          <meta charset="utf-8">
          <title>My Website</title>
          <script type="text/javascript" src="index.js"></script>
        </head>
        <body>
          <button id='alert'>Click to Alert!</button>
        </body>
      </html>
      ```

      ```javascript
      const button = document.getElementById('alert')

      function handleClick(){
        alert("I was clicked!")
      }

      button.addEventListener('click', handleClick)
      ```

    For this code to properly run, we must move out script tag to the bottom of the body. Our code renders the javascript BEFORE it even
    gets to the body. So, when we try to interact with the DOM it does not see our HTML body, at all.