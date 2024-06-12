# CRUD Authentication App

This is a simple web application built with React that demonstrates user authentication and CRUD operations. Users can register, log in, and perform CRUD operations on a list of items.

## Features

- User Registration
- User Login
- Session Management
- Displaying a list of items
- Filtering and sorting the list
- Adding, updating, and deleting items

## Setup Instructions

1. First, create a new React application using create-react-app.
   ```bash
    npx create-react-app my-app
    cd my-app
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Start the application:
    ```bash
    npm start
    ```

4. Open your browser and go to `http://localhost:3000`

## Project Structure


## Application Overview

### Authentication

- **Register**: Users can create an account by providing a username and password.
- **Login**: Registered users can log in using their credentials With Username and Password.

### Session Management

- User sessions are managed using `localStorage`. Once a user logs in, their session is maintained until they log out.

### Data Operations

- **Display List**: A list of items is displayed on the landing page after login.
- **Filter**: Users can filter the list by name.
- **Sort**: Users can sort the list by name, category, or date in ascending or descending order.
- **CRUD Operations**:
  - **Insert**: Users can add a new item to the list.
  - **Update**: Users can edit existing items in the list.
  - **Delete**: Users can delete items from the list.

## Assumptions

- This application uses `localStorage` for simplicity and demonstration purposes. In a production application, a proper backend and database would be required.
- Basic styling is applied. For a production app, additional CSS or a UI framework could be used for better styling.

## Code Quality

- The code is organized into reusable components.
- Comments and documentation are included where necessary.

## Security

- Passwords are stored in localstorage and checking the user input password with locastorage password.
- Basic input validation is implemented.

## Performance

- The application is optimized for a responsive user experience.

## Version Control

- The project is managed using Git. Ensure to commit changes frequently and use meaningful commit messages.

## Contributions

Contributions are welcome. Please fork the repository and submit a pull request for any improvements or bug fixes.
