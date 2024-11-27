import React, { useState, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import Crud from "./Crud";
import { Modal } from "bootstrap"; 

const App = () => {
  const [users, setUsers] = useState([]);
  const [editingUserIndex, setEditingUserIndex] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    dob: "",
    mobile: "",
  });
  const [emailError, setEmailError] = useState("");
  const modalRef = useRef(null);

  const handleAddUser = (e) => {
    e.preventDefault();

    // Validate duplicate email
    if (
      users.some(
        (user, index) =>
          user.email === formData.email && index !== editingUserIndex
      )
    ) {
      setEmailError("User with this email already exists.");
      return;
    }

    setEmailError("");

    if (editingUserIndex !== null) {
      // Update existing user
      const updatedUsers = users.map((user, index) =>
        index === editingUserIndex ? { ...formData } : user
      );
      setUsers(updatedUsers);
      setEditingUserIndex(null);
    } else {
      // Add new user
      setUsers([...users, formData]);
    }

    // Reset form data and close modal
    setFormData({ name: "", email: "", dob: "", mobile: "" });
    const modal = Modal.getInstance(modalRef.current);
    modal.hide();
  };

  const handleEditUser = (index) => {
    setFormData(users[index]);
    setEditingUserIndex(index);

    // Show modal
    const modal = new Modal(modalRef.current);
    modal.show();
  };

  const handleDeleteUser = (index) => {
    const updatedUsers = users.filter((_, i) => i !== index);
    setUsers(updatedUsers);
  };

  const handleDeleteAll = () => {
    // Confirmation dialog
    const confirmation = window.confirm(
      `Are you sure you want to delete all users matching the search term "${searchTerm}"?`
    );
    if (!confirmation) return;

    const filtered = users.filter(
      (user) =>
        !(
          user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
          user.dob.includes(searchTerm) ||
          user.mobile.includes(searchTerm)
        )
    );
    setUsers(filtered);
  };

  return (
    <div className="container">
      <h1 className="text-center fw-bold text-danger p-4">
        CRUD OPERATION IN REACT
      </h1>

      {/* CRUD Component */}
      <Crud
        users={users}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        handleAddUser={handleAddUser}
        handleEditUser={handleEditUser}
        handleDeleteUser={handleDeleteUser}
        handleDeleteAll={handleDeleteAll}
        setFormData={setFormData}
        formData={formData}
        setEditingUserIndex={setEditingUserIndex}
        emailError={emailError}
        setEmailError={setEmailError}
        modalRef={modalRef}
      />

      {/* Add/Edit User Modal */}
      <div
        className="modal fade"
        id="addEditUserModal"
        tabIndex="-1"
        aria-labelledby="addEditUserModalLabel"
        aria-hidden="true"
        ref={modalRef}
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="addEditUserModalLabel">
                {editingUserIndex !== null ? "Edit User" : "Add User"}
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                  />
                  {emailError && (
                    <div className="text-danger">{emailError}</div>
                  )}
                </div>
                <div className="mb-3">
                  <label htmlFor="dob" className="form-label">
                    Date of Birth
                  </label>
                  <input
                    type="date"
                    className="form-control"
                    id="dob"
                    value={formData.dob}
                    onChange={(e) =>
                      setFormData({ ...formData, dob: e.target.value })
                    }
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="mobile" className="form-label">
                    Mobile
                  </label>
                  <input
                    type="tel"
                    className="form-control"
                    id="mobile"
                    value={formData.mobile}
                    onChange={(e) =>
                      setFormData({ ...formData, mobile: e.target.value })
                    }
                  />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={handleAddUser}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
