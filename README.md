# About This App
I created this notes app using the MERN stack.  
Deployed in Heroku with this link: https://allisonotes.herokuapp.com

The reference of this project was from Angela Yu's course in [Udemy](https://www.udemy.com/course/the-complete-web-development-bootcamp).  
With this project, I changed the CSS and added login/signup with a backend. I also used react-router-dom v6.

# What I Learned

- Learned that I can select :hov state in Chrome developer tools to show the :hover styles and other states as well.

- CSS float can also be used in layouting with attributes such as left and right.
```css
float: left;
```

- The destructuring assignment of JavaScript ES6 applies to the useState of React.

- React controlled and uncontrolled component. In a controlled component, form data is handled by a React component. The alternative is uncontrolled components, where form data is handled by the DOM itself.

- Using map Array method with ES6 syntax:
```JSX
{notes.map((note, index) => {
        return (<Note
          key={index}
          title={note.title}
          content={note.content}
        />)
      })}
```

- JavaScript Array methods Map and Filter

- The attribute `disabled` for button element or the Fab component of MUI can be set using conditional rendering. The button is disabled until the text is written in the text area on input fields.

- The attribute `defaultValue` for the input element renders the value.

- Using `inherit` as value in CSS to inherit the style of the parent element.

- Using width: 100% to center the element with text-align center.

- I'm proud of initializing the title and content of a note component, this is needed in case if you only edit the title or content and not causing a initialized blank text.

- I got stuck in updating the value of an element in an array using the useState hook, but I was able to resolve it with the help of stack overflow. The resolution is that the array should be spread first:
(https://stackoverflow.com/questions/61302689/how-to-update-an-array-in-usestate-using-its-index-in-react-native/61302773#61302773?newreg=b2e7e060df8b47828a022964c979e2fb)

Before (the value of state was not updated):
```JSX
setNotes(prevValue => {
      prevValue[id] = editedNote;
      return prevValue;
    })
```

After (the value of state was updated immediately):
```JSX
setNotes(prevValue => {
      const array = [...prevValue];
      array[id] = editedNote;
      return array;
    });
```

- I used the component `TextareaAutosize` of MUI to autoresize the textarea element.


- Mongoose is a MongoDB object modeling tool designed to work in an asynchronous environment. Mongoose supports both promises and callbacks. (https://www.npmjs.com/package/mongoose)

- Not every single function that takes an argument is asynchronous, but in general, most function that takes function argument are going to be asynchronous. (https://www.youtube.com/watch?v=Kpn2ajSa92c)

- To understand the difference between `express()` and `express.Router()`, `express()` is for the main app and `express.Router()` is for the mini app. (https://stackoverflow.com/questions/28305120/differences-between-express-router-and-app-get)

- The `res.json()` function sends a JSON response. This method sends a response (with the correct content-type) that is the parameter converted to a JSON string using the JSON.stringify() method. (https://www.geeksforgeeks.org/express-js-res-json-function/)
Syntax:
```JS
res.json( [body] )
```
Parameters: The body parameter is the body which is to be sent in the response.
Return Value: It returns an Object.

- The `then()` method returns a Promise. It takes up to two arguments: callback functions for the success and failure cases of the Promise. (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/then)
Syntax:
```JS
p.then(onFulfilled[, onRejected]);

p.then(value => {
  // fulfillment
}, reason => {
  // rejection
});
```

- A callback function is a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action. (https://developer.mozilla.org/en-US/docs/Glossary/Callback_function)

- Mongoose provides a straight-forward, schema-based solution to model your application data. It includes built-in type casting, validation, query building, business logic hooks and more, out of the box. (https://mongoosejs.com/)

- CORS is a browser security feature that restricts cross-origin HTTP requests with other servers and specifies which domains access your resources. (https://www.section.io/engineering-education/how-to-use-cors-in-nodejs-with-express/) 
  - CORS middleware is not needed for this app as the HTTP requests is the same server.

- Making asynchronous programming easier with async and await. (https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Async_await)

- For the  `useEffect()` to render only once, add `[]` as the 2nd parameter.
```JSX
useEffect(() => {
  // do something once
  }, [])
```

- react-router-dom (https://www.youtube.com/watch?v=EmUa_tcSM-k&list=PL4cUxeGkcC9gZD-Tvwfod2gaISzfRiP9d&index=22)
  - I used v6 instead of the v5 in the YouTube tutorial and I discovered that `Switch` is replaced by `Routes`. Also, `exact` is not needed anymore in Route declaration. (https://stackoverflow.com/questions/63124161/attempted-import-error-switch-is-not-exported-from-react-router-dom)

- StrictMode is a tool for highlighting potential problems in an application. (https://reactjs.org/docs/strict-mode.html)
```JSX
<React.StrictMode>
    <App />
</React.StrictMode>
```

- The <label> tag in HTML is used to provide a usability improvement for mouse users i.e, if a user clicks on the text within the <label> element, it toggles the control. (https://www.geeksforgeeks.org/html-label-tag/)

- You can nest the `<input>` directly inside the `<label>`, in which case the `for` and `id` attributes are not needed because the association is implicit:
```HTML
<label>Do you like peas?
  <input type="checkbox" name="peas">
</label>
```
(https://developer.mozilla.org/en-US/docs/Web/HTML/Element/label)

- `event.preventDefault()` method cancels the event if it is cancelable, meaning that the default action that belongs to the event will not occur. (https://www.w3schools.com/jsref/event_preventdefault.asp)

- `useNavigate` is a new hook introduced in React Router v6 and has replaced useHistory. (https://dev.to/salehmubashar/usenavigate-tutorial-react-js-aop) 
  - Uses:
    - Go to the previous or next pages
    - Redirect user to a specific Url

- If you want to send something within request body with GET requests (Axios API), `params` won't work - and neither will `data`, as it's only taken into account for PUT, POST, DELETE, and PATCH requests. (https://stackoverflow.com/questions/46404051/send-object-with-axios-get-request)

- (React Router V6) `useNavigate()` may be used only in the context of a `<Router>` component.

- async await vs then (https://stackoverflow.com/questions/54495711/async-await-vs-then-which-is-the-best-for-performance)

- To break a line in an element using CSS: (https://stackoverflow.com/questions/8627902/how-to-add-a-new-line-in-textarea-element)
```CSS
.note p {
    white-space: pre-wrap;
}
```

- Serving static files in Express (https://expressjs.com/en/starter/static-files.html)

- When I refresh the URL of other pages (e.g. http://localhost:5000/login), I encountered an error "Cannot GET". I was able to resolve this by using the "Catch-all" method. (https://ui.dev/react-router-cannot-get-url-refresh/)
```JS
app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, '../build/index.html'));
});

```
before it was
```JS
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../build'));
});

```
Where the sendFile method was not directed to the index.html and added "*" to the route.

- Make text show up on hover over button. Use title in order to display your message:
```HTML
<button class="addMore" title="click here">+</button>
```
(https://stackoverflow.com/questions/45456543/make-text-show-up-on-hover-over-button)



