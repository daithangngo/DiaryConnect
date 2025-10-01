import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers, createUser, deleteUser } from "../features/users/userSlice";
import { Link } from "react-router-dom";

const UsersPage = () => {
  const dispatch = useDispatch();

  // Get state from redux store
  const { list, loading, error } = useSelector((state) => state.users);

  // Local state for creating a new user
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    username: "",
    password: "",
  });

  // Load users when component mounts
  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  // Handle form submission (creating user)
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Dispatch createUser thunk
      await dispatch(createUser(form)).unwrap();
      // Clear form 
      setForm({
        firstName: "",
        lastName: "",
        username: "",
        password: "",
      });
      // Refresh the users list
      dispatch(fetchUsers());
    } catch (err) {
      alert("Error creating user: " + err.message);
    }
  };

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle user deletion
  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      dispatch(deleteUser(id));
    }
  };

  // Show loading state
  if (loading) {
    return <div>Loading users...</div>;
  }

  // Show error state
  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div style={{ padding: 10 }}>
      <h1>Users Management</h1>
      
      {/* Create User Form */}
      <form onSubmit={handleSubmit} style={{ marginBottom: 30, padding: 20, border: '1px solid #ccc' }}>
        <h3>Create New User</h3>
        <div style={{ marginBottom: 10 }}>
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={form.firstName}
            onChange={handleInputChange}
            required
            style={{ marginRight: 10, padding: 5 }}
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={form.lastName}
            onChange={handleInputChange}
            required
            style={{ marginRight: 10, padding: 5 }}
          />
        </div>
        <div style={{ marginBottom: 10 }}>
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={form.username}
            onChange={handleInputChange}
            required
            style={{ marginRight: 10, padding: 5 }}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleInputChange}
            required
            style={{ marginRight: 10, padding: 5 }}
          />
        </div>
        <button type="submit" style={{ padding: '5px 15px' }}>
          Create User
        </button>
      </form>

      {/* Users List */}
      <div>
        <h3>Users List ({list?.length || 0} users)</h3>
        {list && list.length > 0 ? (
          <div style={{ display: 'grid', gap: 10 }}>
            {list.map(user => (
              <div 
                key={user.id} 
                style={{ 
                  padding: 15, 
                  border: '1px solid #ddd', 
                  borderRadius: 5,
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center'
                }}
              >
                <div>
                  <strong>{user.firstName} {user.lastName}</strong>
                  <div>Username: {user.username}</div>
                </div>
                <div>
                  <Link 
                    to={`/users/${user.id}/notes`}
                    style={{ marginRight: 10, color: 'blue' }}
                  >
                    View Notes
                  </Link>
                  <button 
                    onClick={() => handleDelete(user.id)}
                    style={{ 
                      backgroundColor: 'red', 
                      color: 'white', 
                      border: 'none', 
                      padding: '5px 10px',
                      borderRadius: 3,
                      cursor: 'pointer'
                    }}
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p>No users found. Create your first user!</p>
        )}
      </div>
    </div>
  );
};

export default UsersPage;