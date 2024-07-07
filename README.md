# React Forms Input Project

This project demonstrates various methods for handling form inputs in a React application. It includes examples of using `useState`, refs, and the native `FormData` API to manage and validate form data.

## Features

1. **useState**: Utilizes the `useState` hook to manage form state and handle data within the `onSubmit` function.
2. **Refs**: Uses refs to directly access DOM elements and retrieve their values.
3. **FormData API**: Employs the native `FormData` API provided by the browser to collect form data.

### How to Handle Form Inputs

1. **useState**: Set the `onChange` prop on inputs to update the state, and handle all data inside the `onSubmit` function.
2. **Refs**: Use `refName.current.value` to get the input values.
3. **FormData API**: Ensure all input fields have the `name` prop set. For nested or grouped inputs like checkboxes, use `fd.getAll()` and combine it with the rest of the object attributes.

## Getting Started

To run this project locally, follow these steps:

1. Clone this repository to your local machine:

```bash
git clone https://github.com/trishna456/forms.git
```

2. Navigate to the project directory:
```bash
cd forms
```

3. Install dependencies using npm or yarn:
```bash
npm install
# or
yarn install
```

4. Start the development server:
```bash
npm start
# or
yarn start
```

5. Open your web browser and navigate to http://localhost:3000 to view the project. 
