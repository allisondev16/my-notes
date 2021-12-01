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

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
