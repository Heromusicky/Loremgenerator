## Figma URL

[Lorem Ipsum](https://www.figma.com/file/JRDDc3aN6uiBS3yvjbkk0s/Lorem-ipsum?node-id=0%3A1&t=cLtQmBowNmb4V0jP-1)

## Steps

#### Explore Data

Navigate to data.js and explore array

#### Count State Value

In App.jsx, set up a count state value using the useState hook. Set the default value to 1.

#### Form

Set up a form element that contains a number input and a submit button. Attach the count state value to the input using the value prop, and set up a handleChange function to update the count state value when the input changes. Set the minimum value to 1, the maximum value to 8, and the step to 1.

#### Import Text and State Value

Import the text array from data.js and set up a text state value using the useState hook. Set the default value to an empty array.

#### OnSubmit

Attach an onSubmit event to the form, and create a handleSubmit function to handle the form submission. Inside the handleSubmit function, prevent the default form submission behavior using event.preventDefault(). Get the count state value, and use it to create a new array by extracting the first n paragraphs from the text array (where n is the count state value). Set the text state value to the new array.
Hint : I will use array.slice()
Additional info below
