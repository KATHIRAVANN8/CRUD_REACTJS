
CRUD Operation in React

Project Overview
-----------------
This project demonstrates a basic CRUD (Create, Read, Update, Delete) operation in React using state management and Bootstrap for styling. Users can dynamically add, edit, delete, and search records in a table. The app consists of a simple user management system where user details can be managed efficiently.

Features
---------
- Add New User: Add a new user to the table.
- Edit User: Edit existing user information.
- Delete User: Remove an individual user from the list.
- Delete All Users: Delete all users with a confirmation prompt.
- Search Functionality: Filter users based on name, email, or other fields.

Project Structure
-----------------
- Components:
  - AddUserModal.js: Modal component for adding or editing user data.
  - ConfirmDeleteModal.js: Modal component for confirming the deletion of all records.
  - UserTable.js: Displays the table with user records and options to edit and delete users.

- App.js:
  - Main component that handles state management and integrates all other components.

- Styling:
  - Uses Bootstrap for styling and Font Awesome for action icons (edit, delete).

Dependencies
------------
- React 18.x
- Bootstrap 5.3.3
- Font Awesome 6.0.0-beta3

Setup Instructions
------------------

1. Clone the Repository
------------------------
git clone <repository-url>
cd <project-directory>

2. Install Dependencies
------------------------
npm install

3. Start the Development Server
-------------------------------
npm start

4. Build for Production
------------------------
npm run build

Libraries Used
--------------
1. Bootstrap: For responsive design and UI components.
2. Font Awesome: For icons used in actions (e.g., edit and delete).

How to Use
-----------

Add New User
-------------
1. Click the "Add New User" button to open the modal.
2. Fill in the user details in the modal form.
3. Click "Save" to add the user to the table.

Edit Existing User
------------------
1. Click the "Edit" button next to a user record.
2. Modify the user details in the modal.
3. Click "Save" to update the user in the table.

Delete User Record
------------------
1. Click the "Delete" button next to a user record.
2. The user will be removed from the list instantly.

Delete All Records
------------------
1. Click the "Delete All" button on the top-right corner.
2. A confirmation modal will appear; confirm to delete all records.

Search Records
--------------
1. Use the Search input field at the top of the table to filter records by name, email, or other fields.

File Structure
--------------
src/
├── components/
│   ├── AddUserModal.js       # Modal for adding/editing users
│   ├── ConfirmDeleteModal.js # Modal for confirming mass deletion
│   ├── UserTable.js          # Table displaying user records
├── App.js                    # Main component managing state and integration
├── index.js                  # Entry point for the application
└── README.md                 # Documentation for the project

Notes
-----
- Ensure that all dependencies are correctly installed by running npm install.
- Modify or extend the state management or API integration as needed to suit your application's requirements.
- Customize the UI and styling to meet your preferences.
