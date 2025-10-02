import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers, deleteUser } from "../redux/slices/userSlice";
import { Link } from "react-router-dom";

const UsersPage = () => {
  const dispatch = useDispatch();

  // Get state from redux store
  const { list, loading, error } = useSelector((state) => state.users);

  // Load users when component mounts
  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

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
      <Link to={"/users/login"}>Register new User</Link>

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