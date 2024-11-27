// Crud.jsx
import React from "react";
import { Modal } from "bootstrap";

const Crud = ({
  users,
  searchTerm,
  setSearchTerm,
  handleAddUser,
  handleEditUser,
  handleDeleteUser,
  handleDeleteAll,
  setFormData,
  formData,
  setEditingUserIndex,
  emailError,
  setEmailError,
  modalRef,
}) => {
  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.dob.includes(searchTerm) ||
      user.mobile.includes(searchTerm)
  );

  const handleOpenModal = () => {
    setEditingUserIndex(null);
    setFormData({ name: "", email: "", dob: "", mobile: "" });
    const modal = new Modal(modalRef.current);
    modal.show();
  };

  return (
    <div>
      <div className="d-flex bg-primary p-3 w-100 justify-content-between">
        <div>
          <h1 className="text-white fw-bold">REACT</h1>
        </div>
        <div>
          <input
            type="search"
            placeholder="Search"
            className="form-control d-inline w-auto"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button
            className="btn btn-success fw-bold mx-2"
            onClick={handleOpenModal}
          >
            <i className="fa fa-plus"></i> Add New User
          </button>
          <button className="btn btn-danger fw-bold" onClick={handleDeleteAll}>
            <i className="fa fa-minus"></i> Delete All
          </button>
        </div>
      </div>

      {/* User Table */}
      <table className="table table-striped text-center mt-3" id="userTable">
        <thead>
          <tr>
            <th className="fw-bold">S.No</th>
            <th className="fw-bold">Name</th>
            <th className="fw-bold">Email</th>
            <th className="fw-bold">DOB</th>
            <th className="fw-bold">Mobile</th>
            <th className="fw-bold">Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers.map((user, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.dob}</td>
              <td>{user.mobile}</td>
              <td>
                <button
                  className="btn btn-warning btn-sm me-2"
                  onClick={() => handleEditUser(index)}
                >
                  Edit
                </button>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => handleDeleteUser(index)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Add User Modal */}
      <div
        className="modal fade"
        ref={modalRef}
        id="addUserModal"
        tabIndex="-1"
        aria-labelledby="addUserModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="addUserModalLabel">
                {formData.editingUserIndex !== null
                  ? "Edit User"
                  : "Add New User"}
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form onSubmit={handleAddUser}>
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
                    required
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
                    required
                  />
                  <span className="text-danger">{emailError}</span>
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
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="mobile" className="form-label">
                    Mobile
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="mobile"
                    value={formData.mobile}
                    onChange={(e) =>
                      setFormData({ ...formData, mobile: e.target.value })
                    }
                    required
                  />
                </div>
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Crud;
